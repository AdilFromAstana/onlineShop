import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const DeviceSort = () => {

    const device = useSelector(state=>state.deviceReducer.devices);
    const dispatch = useDispatch();
    const [selectedSort, setSelectedSort] = useState('');

    const options = [
        {value: 'price', name: 'По цене'},
        {value: 'name', name: 'По названию'}
    ]

    //Определяем сортировку по ...
    const sortBy = (sort) => {
        return (sort === 'price') 
        ? (a, b) => a[sort] - b[sort] //сортировка по цене
        : (a, b)=> a[sort].localeCompare(b[sort]); // сортировка по названию
    };

    //Функция сортировки по ...
    const sortDevices =(sort) => {
        setSelectedSort(sort); //отображение выбранного типа сортировки в SELECT
        dispatch({type: 'devices', payload: [...device].sort(sortBy(sort))}); // передаем в глобальный стейт отсортированный массив 
    };

    return (
        <Form.Select 
            value={selectedSort}
            onChange={e => sortDevices(e.target.value)}
        >
            <option disabled value="">Сортировка по</option>
            {options.map(option => 
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </Form.Select>
    );
};

export default DeviceSort;