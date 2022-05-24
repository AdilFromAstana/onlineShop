import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Image, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { REACT_APP_API_URL } from '../http';

const DeviceInBasket = ({device}) => {

    const [deviceCount, setDeviceCount] = useState(1);
    const [isDeviceAdded, setIsDeviceAdded] = useState(true);

    const devicesInBasket = useSelector(state=>state.deviceReducer.basket)

    const needDeviceIndex = devicesInBasket.indexOf(device);
    const priceForDevicesCount = devicesInBasket.find(needDev => needDev.price == device.price).price*deviceCount;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const priceForDevices = (isDeviceAdded) => {
        if(isDeviceAdded){
            devicesInBasket.map(anyDevice=>
                anyDevice == device
                ? anyDevice.price = priceForDevicesCount
                : anyDevice
            )
            console.log(devicesInBasket)
            return dispatch({type: 'basket', payload: devicesInBasket})
        } else {
            devicesInBasket.map(anyDevice=>
                anyDevice == device
                ? anyDevice.price = 0
                : anyDevice
            )
            console.log(devicesInBasket)
            return dispatch({type: 'basket', payload: devicesInBasket})
        }
    }

    useEffect(() =>{
        priceForDevices(isDeviceAdded)
    }, [deviceCount])

    return (
        <Container key={device.id} border="primary" className="align-self-center p-3 border border-dark">
            <Row className="align-items-center">
                <Col md={1}>
                    <Form>
                        <Form.Check 
                            onChange={()=>setIsDeviceAdded(!isDeviceAdded)} 
                            type="checkbox"
                            checked={isDeviceAdded}
                        />
                    </Form>
                </Col>
                <Col md={2}>
                    <Image src={REACT_APP_API_URL + device.img} style={{ maxWidth: '6rem' }}/>
                </Col>
                <Col md={5}>
                    <h5 className="d-inline-block cursor-pointer" onClick={()=>navigate(`/device/${device.id}`)}>{device.name}</h5>
                </Col>
                <Col md={2}>
                    <input
                        type="number"
                        style={{width: "50px"}}
                        value={
                            deviceCount<1
                            ? 0
                            : deviceCount
                        }
                        onChange={e=>setDeviceCount(e.target.value)}
                    />
                </Col>
                <Col md={2}>
                    <strong>{device.price*deviceCount} тг</strong>
                </Col>
            </Row>
        </Container>
    );
};

export default DeviceInBasket;