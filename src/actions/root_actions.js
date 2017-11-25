import {
    ROOT_INIT_DRAWER,
    ROOT_INIT_CURRENT_ROUTE
} from '../constants/constants';


export const appDrawerSet = (drawer_instance) => {
    return {
        type: ROOT_INIT_DRAWER,
        payload: drawer_instance
    }
};

export const initCurrentRoute = (route) => {
    return {
        type: ROOT_INIT_CURRENT_ROUTE,
        payload: route
    }
};
