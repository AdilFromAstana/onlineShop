import React, {useEffect, useState} from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createDevice, fetchDevices } from '../http/deviceAPI';
import { fetchTypes } from '../http/typeAPI';
import { fetchBrands } from '../http/brandAPI';

const CreateDevice = ({show, onHide}) => {

    const dispatch = useDispatch();
    
    useEffect(()=>{
        fetchTypes().then(data => {
            dispatch({type: 'types', payload: data});
        })
        fetchBrands().then(data => {
            dispatch({type: 'brands', payload: data});
        })
        fetchDevices().then(data => {
            dispatch({type: 'devices', payload: data.rows});
        })
    }, [])

    const selectedType = (type) => {
        dispatch({type: 'selectedType', payload: type})
    }

    const selectedBrand = (brand) => {
        dispatch({type: 'selectedBrand', payload: brand})
    }

    const device = useSelector(state=>state.deviceReducer)

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);

    const [info, setInfo] = useState([]);

    const addInfo = () => {
        setInfo([...info, {title:'', description:'', number: Date.now()}])
    }

    const changeInfo = (key, value, number) => {
            setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новый тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{device.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type=>
                                <Dropdown.Item 
                                    onClick={()=>selectedType(type)} 
                                    key={type.id}
                                >
                                        {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown  className="mt-2 mb-2">
                        <Dropdown.Toggle>{device.selectedBrand.name || "Выберите бренд"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand=>
                                <Dropdown.Item 
                                    onClick={()=>selectedBrand(brand)} 
                                    key={brand.id}
                                >
                                        {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название товара"
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите стоимость товара"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button variant={'outline-dark'} onClick={addInfo}>
                        Добавить новое свойство
                    </Button>
                    {info.map(i=>
                        <Row className="mt-2" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Введите название свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder="Введите описание свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Button 
                                    variant={'outline-danger'}
                                    onClick={ ()=> removeInfo(i.number)}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>    
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addDevice}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;