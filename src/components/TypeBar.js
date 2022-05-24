import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const TypeBar = () => {

    const dispatch = useDispatch();

    const device = useSelector(state=>state.deviceReducer)

    const selecter = (type) => {
        dispatch({type: 'selectedType', payload: type})
    }

    return (
        <ListGroup>
            <span style={{marginBottom: '10px'}}>Категории</span>
            {device.types.map(type=>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    className='p-3'
                    active={type.id === device.selectedType.id}
                    onClick={()=>selecter(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
};

export default TypeBar;