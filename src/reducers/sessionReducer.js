import {RECEIVE_TOKEN} from '../actions'

export default function sessionReducer(state = {}, action) {
    switch(action.type) {
        case RECEIVE_TOKEN:
            return state;
        default:
            return state;
    }
}