import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { adminRoutes, publicRoutes, userRoutes } from '../router';
import { SHOP_ROUTER } from '../utils/consts';
import {useSelector} from 'react-redux';

const AppRouter = () => {
    
    const userReducer = useSelector(state=>state.userReducer);

    return (
        <Routes>
            {userReducer.user.role === 'ADMIN'
                ?
                adminRoutes.map(({path, Component})=>
                    <Route key={path} path={path} element={Component} exact={true}/>
                )
                :
                userRoutes.map(({path, Component})=>
                    <Route key={path} path={path} element={Component} exact={true}/>
                )
            }
            {publicRoutes.map(({path, Component})=>
                <Route key={path} path={path} element={Component} exact={true}/>
            )}
            <Route path='*' element={<Navigate to={SHOP_ROUTER}/>}/>
        </Routes>
    );
};

export default AppRouter;