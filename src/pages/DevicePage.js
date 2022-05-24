import React, { useEffect, useState } from 'react';
import { Tabs, Tab, Col, Container, Image, Row, Button, } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { REACT_APP_API_URL } from '../http';
import { fetchOneDevice } from '../http/deviceAPI';

const DevicePage = () => {

    const [device, setDevice] = useState({ info:[] });

    const {id} = useParams();

    useEffect(()=>{
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <Container className="mt-3">
            <Row>
                <Col md={8} className="d-flex align-self-center justify-content-center">
                    <Image width={600} background={'gray'} src={REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={4}>
                    <div className="d-flex flex-column align-items-start">
                        <h2>{device.name}</h2>
                        <div>
                            {device.rating} отзывов
                        </div>
                    </div>
                    <div>
                        Цена <h3>{device.price} тг</h3>
                    </div>
                    <div>
                        <div>Рассрочка на 12 месяцев</div>
                        <h3 style={{background: 'yellow', display: 'inline-block'}}>{Math.ceil(device.price / 12)} тг</h3>
                    </div>
                    <Button 
                        className="mt-3" 
                        variant={'outline-primary'} 
                        size="lg"
                    >
                        Добавить в корзину
                    </Button>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <Tabs 
                    defaultActiveKey="profile" 
                    id="uncontrolled-tab-example" 
                    className="mb-3" 
                    style={{fontSize: '30px'}}
                >
                    <Tab eventKey="home" title="Характеристики">
                        <h1>Характеристики</h1>
                        {device.info.map((info, index)=>
                            <Row key={info.id} style={{background: index%2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                                {info.title}: {info.description}
                            </Row>
                        )}
                    </Tab>
                    <Tab eventKey="profile" title="Отзывы">
                        <h1>Отзывы</h1>
                        {device.info.map((info, index)=>
                            <Row key={info.id} style={{background: index%2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                                {info.title}: {info.description}
                            </Row>
                        )}
                    </Tab>
                </Tabs>
            </Row>
        </Container>
    );
};

export default DevicePage;