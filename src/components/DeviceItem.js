import React from 'react';
import { Card } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {DEVICE_ROUTER} from '../utils/consts';
import { REACT_APP_API_URL } from '../http';

const DeviceItem = ({device}) => {

    const navigate = useNavigate();

    return (
    <Card className="d-flex flex-column justify-content-space-between pt-3" style={{width: '33.3%', cursor: 'pointer'}} onClick={() => navigate(DEVICE_ROUTER + '/' + device.id)}>
        <Card.Img style={{padding:'5px', height: '250px', objectFit:'contain'}} variant="top" src={REACT_APP_API_URL + device.img} />
        <Card.Body className="d-flex flex-column justify-content-end">
            <Card.Title>{device.name}</Card.Title>
            <Card.Footer className='d-flex justify-content-between'>
                <div>
                    Цена: <br/>
                    <strong>{device.price} тг</strong>
                </div>
                <div>
                    В рассрочку: <br/>
                    <strong style={{display:'inline-block', backgroundColor:'yellow'}}>{Math.ceil(device.price / 12)} тг</strong>  X 12мес.
                </div>
            </Card.Footer>
        </Card.Body>
    </Card>
    );
};

export default DeviceItem;