

export const CHANGE_INPUT = 'CHANGE_INPUT';

const SERVER_URL = '';
const GET_AUTH_URL = `${SERVER_URL}/auth`;
const JSON_HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
};

const changeInput = (name, value) => ({
    type: CHANGE_INPUT,
    name,
    value
});
export default changeInput;

export const logIn = (user) => {
        return fetch(`${GET_AUTH_URL}`, {
            method: 'POST',
            headers: JSON_HEADERS,
            credentials: 'same-origin',
            body: JSON.stringify({email: user.email, password: user.password})
        })
            .then(body => body.json());
            // .then(json => dispatch(receiveChallenge(json, user.password)))
            // .then(json => dispatch(fetchUsers(fromReducers.getToken(getState()))))
            // .then(json => dispatch(fetchDevices(fromReducers.getToken(getState()))))
            // .then(() => dispatch(goHome()))
            // .catch(error => dispatch(receiveFailure(error)));
};


