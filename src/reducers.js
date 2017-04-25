import {CHANGE_INPUT} from './actions';
import {combineReducers} from 'redux';

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