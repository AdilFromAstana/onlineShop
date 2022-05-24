import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { login, registration } from '../http/userAPI';
import { LOGIN_ROUTER, REGISTRATION_ROUTER, SHOP_ROUTER } from '../utils/consts';

const Auth = () => {

    const dispatch = useDispatch();

    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTER;

    const navigate = useNavigate();

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const click = async () => {
        try{
            let data;
            if(isLogin){
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            dispatch({type:'authUser', payload: data})
            navigate(SHOP_ROUTER)
        } catch(e){
            console.log(e);
        }
    }

    return (
        <Container 
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'>{isLogin? 'Авторизация' : 'Регистрация'}</h2> 
                <Form className="d-flex flex-column">
                    <Form.Control
                        className='mt-2'
                        placeholder="Введите ваш email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите ваш пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />
                    <div className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin
                        ?
                        <div>
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTER}>Зарегистрируйтесь</NavLink>
                        </div>
                        :
                        <div>
                            Есть аккаунта? <NavLink to={LOGIN_ROUTER}>Войти</NavLink>
                        </div>
                        }
                        <Button 
                            variant={'outline-success'}
                            onClick={click}
                        >
                            {isLogin? 'Войти' : 'Регистрация'}
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;