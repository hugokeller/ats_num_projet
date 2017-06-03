import {CHANGE_INPUT, RECEIVE_TOKEN} from '../actions';
import {combineReducers} from 'redux';
import session from './sessionReducer';

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

const rootReducer = combineReducers({user, inputs, session});
export default rootReducer;