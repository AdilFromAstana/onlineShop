const defaultState = {
    types: [],

    brands: [],

    devices: [],

    basket: [],

    selectedType: {},

    selectedBrand: {},

    page : 1,

    totalCount : 0,

    limit: 2,

}

export const deviceReducer = (state=defaultState, action)=>{
    switch(action.type){
        case 'types':
            return {...state, types: action.payload}
        case 'basket':
            return {...state, basket: action.payload}
        case 'brands':
            return {...state, brands: action.payload}
        case 'devices':
            return {...state, devices: action.payload}
        case 'selectedType':
            return {...state, selectedType: action.payload}
        case 'selectedBrand':
            return {...state, selectedBrand: action.payload}
        case 'page':
            return {...state, page: action.payload}
        case 'totalCount':
            return {...state, totalCount: action.payload}
        case 'limit':
            return {...state, limit: action.payload}
        default:
            return state
    }
}