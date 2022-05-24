import React from 'react';
import {ListGroup} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const BrandBar = () => {

    const dispatch = useDispatch();

    const device = useSelector(state=>state.deviceReducer)

    const selecter = (brand) => {
        dispatch({type: 'selectedBrand', payload: brand})
    }

    return (
        <ListGroup>
            <span style={{margin: '10px 0'}}>Бренд</span>
            {device.brands.map(brand=>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    key={brand.id}
                    className='p-3'
                    active={brand.id === device.selectedBrand.id}
                    onClick={()=>selecter(brand)}
                >
                    {brand.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
};

export default BrandBar;