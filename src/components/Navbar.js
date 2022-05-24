import React from 'react';
import {Nav, Navbar, Button, Container, Dropdown, DropdownButton, Badge} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../http/userAPI';
import { ADMIN_ROUTER, BASKET_ROUTER, LOGIN_ROUTER, PROFILE_ROUTER, SHOP_ROUTER } from '../utils/consts';

const NavBar = () => {

    const navigate = useNavigate();

    const user = useSelector(state=>state.userReducer)

    const dispatch = useDispatch();

    const logout = async () => {
        dispatch({type:'default', payload: ''})
        localStorage.removeItem('token')
        navigate(LOGIN_ROUTER)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTER}>Купи Что-то</NavLink>
                {user.isAuth
                ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        {user.user.role === 'ADMIN' 
                        ?
                        <Button onClick={()=>navigate(ADMIN_ROUTER)} variant={'outline-light'}>Админ Панель</Button>
                        :
                        <Button onClick={()=>navigate(BASKET_ROUTER)} variant={'outline-light'}>
                            Корзина
                            <Badge bg="primary">9</Badge>
                        </Button>
                        }
                        <DropdownButton variant={'outline-light'} title="Профиль">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item onClick={()=>navigate(PROFILE_ROUTER)}>Мой профиль</Dropdown.Item>
                            <Dropdown.Item onClick={()=>logout()}>Выйти</Dropdown.Item>
                        </DropdownButton>
                    </Nav>
                :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button onClick={()=>navigate(LOGIN_ROUTER)} variant={'outline-light'}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
};

export default NavBar;