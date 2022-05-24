import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import DeviceSort from '../components/DeviceSort';
import Pages from '../components/Pages';
import TypeBar from '../components/TypeBar';
import { fetchDevices } from '../http/deviceAPI';
import { fetchTypes } from '../http/typeAPI';
import { fetchBrands } from '../http/brandAPI';

const Shop = () => {

    const dispatch = useDispatch();

    const device = useSelector(state=>state.deviceReducer)

    useEffect(()=>{
        fetchTypes().then(data => {
            dispatch({type: 'types', payload: data});
        })
        fetchBrands().then(data => {
            dispatch({type: 'brands', payload: data});
        })
    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 9).then(data => {
            dispatch({type: 'devices', payload: data.rows});
            dispatch({type: 'totalCount', payload: data.count});
        })
    }, [device.page, device.selectedType, device.selectedBrand])

    return (
        <Container> 
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                    <BrandBar/>
                </Col>
                <Col md={9}>
                    <div className="d-flex justify-content-between">
                        <h1>{device.selectedType.name}</h1>
                        <DeviceSort/>
                    </div>
                    <DeviceList/>
                    <Pages/>
                </Col>
            </Row>
        </Container> 
    );
};

export default Shop;