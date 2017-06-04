

export const CHANGE_INPUT = 'CHANGE_INPUT';
export const RECEIVE_TOKEN = 'RECEIVE_TOKEN';

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

const receiveToken = (credentials) => ({
    type: RECEIVE_TOKEN,
    credentials
});

export const logIn = (user) => {
    return (dispatch) => {
        return fetch(`${GET_AUTH_URL}`, {
            method: 'POST',
            headers: JSON_HEADERS,
            body: JSON.stringify({email: user.email, password: user.password})
        })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                sessionStorage.setItem('jwt', json.token);
                sessionStorage.setItem('idUser', json.idUser);
                dispatch(receiveToken(json))
            })
            .catch(err => {throw(err)});
    }
};

export const postNewUser = user => {
    // todo confirm password
    return dispatch => {
        return fetch('$(SERVER_URL)/clients', {
            method: 'POST',
            headers: JSON_HEADERS,
            body: JSON.stringify({
                firstname: user.firstname,
                lastname: user.lastname,
                company: user.company,
                email: user.email,
                password: user.password
            })
        })
            .then(response => response.json())
            .then(json => console.log(json))
    }
};
