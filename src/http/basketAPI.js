import { $authHost } from "./index";

export const setBasket = async (basketId, deviceId) => {
    const {data} = await $authHost.post('api/setBasket', basketId, deviceId);
    return data;
}

export const getBasket = async (basketId) => {
    let {data} = await $authHost.get('api/basket/getBasket', {params: {
        basketId
    }});
    return data;
}