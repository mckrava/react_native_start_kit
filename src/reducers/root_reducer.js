import {
    ROOT_INIT_DRAWER,
    ROOT_INIT_CURRENT_ROUTE
} from '../constants/constants';


export default (state = {}, action) => {
    switch (action.type) {
        case ROOT_INIT_DRAWER:
            return {...state, app_drawer: action.payload };
        case ROOT_INIT_CURRENT_ROUTE:
            return {...state, current_route: action.payload };
        default:
            return state;
    }
};