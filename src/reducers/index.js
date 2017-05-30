/**
 * Created by Bobo on 30/05/2017.
 */
import {CHANGE_INPUT} from '../actions/index';
import {combineReducers} from 'redux';
import { profile } from '../actions/index'

export const input = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_INPUT:
            return {[action.name]: {name: action.name, value: action.value}};
        default:
            return state;
    }
};
export const inputs = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_INPUT:
            return Object.assign({}, state, input(state, action));
        default:
            return state;
    }
};

export const user = (state = {}, action) => {
    switch (action.type) {
        default:
            return state
    }
};

const loginReducer = combineReducers({user, inputs});
export default loginReducer;

/*const addHvacReducer = combineReducers({user, inputs});
 export default addHvacReducer*/


const initialState = {
    username: "Default User",
    email: "12345678@provider.com",
    password: "",
}