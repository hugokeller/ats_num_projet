

export const CHANGE_INPUT = 'CHANGE_INPUT';

const SERVER_URL = 'http://localhost:8080';
const GET_AUTH_URL = `${SERVER_URL}/auth`;
const JSON_HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
};

export const changeInput = (name, value) => ({
    type: CHANGE_INPUT,
    name,
    value
});

export const logIn = (user) => {
        return fetch(`${GET_AUTH_URL}`, {
            method: 'POST',
            headers: JSON_HEADERS,
            body: JSON.stringify({email: user.email, password: user.password})
        })
            .then(response => response.json())
            .then(json => dispatch(receiveToken(json)));
            // .then(response => console.log(response));
            // .then(json => dispatch(receiveChallenge(json, user.password)))
            // .then(json => dispatch(fetchUsers(fromReducers.getToken(getState()))))
            // .then(json => dispatch(fetchDevices(fromReducers.getToken(getState()))))
            // .then(() => dispatch(goHome()))
            // .catch(error => dispatch(receiveFailure(error)));
};

const receiveToken = (json) => {

};
