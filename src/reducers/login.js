/**
 * Created by Bobo on 30/05/2017.
 */


const login = (state = {}, action) => {
    switch (action.type) {
        case 'USERNAME_ENTERED':
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case 'PASSWORD_ENTERED':
            if (state.id !== action.id) {
                return state
            }

            return Object.assign({}, state, {
                completed: !state.completed
            })

        default:
            return state
    }
}

const logins = (state = [], action) => {
    switch (action.type) {
        case 'USERNAME_ENTERED':
            return [
                ...state,
                login(undefined, action)
            ]
        case 'PASSWORD_ENTERED':
            return state.map(t =>
                login(t, action)
            )
        default:
            return state
    }
}

export default logins