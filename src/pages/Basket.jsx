import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getBasket } from '../http/basketAPI';
import DeviceInBasket from '../components/DeviceInBasket';
import PlaceOrder from '../components/PlaceOrder';

const Basket = () => {

    const basketId = useSelector(state=>state.userReducer.user.id);

    const devicesInBasket = useSelector(state=>state.deviceReducer.basket);

    const dispatch = useDispatch();

    useEffect(() => {
        getBasket(basketId).then(data=>dispatch({type: 'basket', payload: data}))
    }, [])

    return (
        <Container>
            <Row className="mt-3">
                <Col md={8}>
                   {devicesInBasket.map(anyDevice =>
                        <DeviceInBasket device={anyDevice} key={anyDevice.id}/>
                    )}
                </Col>
                <Col md={4}>
                    <PlaceOrder/>
                </Col>
            </Row>
        </Container>
    );
};

export default Basket;