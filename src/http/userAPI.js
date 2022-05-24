import { $authHost, $host, REACT_APP_API_URL } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
    const {data} = await REACT_APP_API_URL.post('api/user/registration', {email, password, role: 'USER'});
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password});
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth');
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}