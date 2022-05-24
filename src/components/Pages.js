import React from 'react';
import { Pagination } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Pages = () => {

    const device = useSelector(state=>state.deviceReducer);

    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = [];

    for (let i = 0; i < pageCount; i++) {
        pages.push(i+1)
    }

    return (
        <Pagination className="mt-5">
            {pages.map(page => 
                <Pagination.Item
                    key={page}
                    active={device.page === page}
                    onClick={()=>device.page(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
};

export default Pages;