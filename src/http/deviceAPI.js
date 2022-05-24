import { $authHost } from "./index";

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device);
    return data
}

export const fetchDevices = async (typeId, brandId, page, limit = 9) => {
    const {data} = await $authHost.get('api/device', {params: {
        typeId, brandId, page, limit
    }});
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $authHost.get('api/device/' + id);
    return data
}