import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const PlaceOrder = () => {

    const [deliverytSelectedMethod, setDeliverySelectedMethod] = useState('');
    const [basketSum, setBasketSum] = useState('');

    const deliveryMethod = [
        {value: 'toHome', name: 'До адреса'},
        {value: 'fromStore', name: 'Самовывоз'}
    ]

    const devicesInBasket = useSelector(state=>state.deviceReducer.basket);

    const basketSumCount = (devicesInBasket) => {
        let sum = 0;
        devicesInBasket.forEach(device => {
            sum += device.price
        })
        console.log(sum)
        return setBasketSum(sum)
    };

    useEffect(()=>{
        basketSumCount(devicesInBasket)
    }, [devicesInBasket])

    return (
        <div>
            <h1>Итого <span>{basketSum}тг</span></h1>
            <div>Кол-во товаров</div>
            <div className="d-flex align-items-center justify-content-between"> 
                <span>Способ доставки</span>
                <Form.Select 
                    className="w-50"
                    value={deliverytSelectedMethod}
                    onChange={e=>setDeliverySelectedMethod(e.target.value)}
                >
                    <option value="" disabled>Выберите способ</option>
                    {deliveryMethod.map(option=>
                        <option value = {option.value} key = {option.value}>
                            {option.name}
                        </option>    
                    )}
                </Form.Select>
            </div>
            <div>Оплата</div>
            <Button variant="outline-primary">Оформить заказ</Button>
        </div>
    );
};

export default PlaceOrder;