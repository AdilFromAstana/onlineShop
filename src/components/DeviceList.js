import React from 'react';
import { useSelector } from 'react-redux';
import DeviceItem from './DeviceItem';

const DeviceList = () => {
    
    const device = useSelector(state=>state.deviceReducer)

    return (
        <div className='d-flex flex-wrap mt-3'>
            {device.devices.map(device =>
                <DeviceItem key={device.id} device={device}/>
            )}
        </div>
    );
};

export default DeviceList;