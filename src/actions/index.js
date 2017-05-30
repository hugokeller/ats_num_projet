/**
 * Created by Bobo on 30/05/2017.
 */


export const CHANGE_INPUT = 'CHANGE_INPUT';

const SERVER_URL = '';
const GET_AUTH_URL = `${SERVER_URL}/auth`;
const JSON_HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
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

const addHvac = (user) => {
    return fetch(`${GET_AUTH_URL}`, {
        method: 'POST',
        headers: JSON_HEADERS,
        credentials: 'same-origin',
        body: JSON.stringify({Nom_HVAC: user.Nom_HVAC, Matricule_HVAC: user.Matricule_HVAC, Nom_du_Client:user.Nom_du_Client,
            Situation_Geographique: user.Situation_Geographique})
    })
        .then(body => body.json());
};
export default addHvac()

export const profile = (user) => {
    return fetch(`${GET_AUTH_URL}`, {
        method: 'POST',
        headers: JSON_HEADERS,
        credentials: 'same-origin',
        body: JSON.stringify({email: user.email, emailnew: user.emailnew, emailconf:user.emailconf,
            password: user.password, passwordnew: user.passwordnew, passwordconf: user.passwordconf})
    })
        .then(body => body.json());
};


export const usernameEntered = (text) => {
    return {
        type: 'USERNAME_ENTERED',
        text
    }
}

export const passwordEntered = (text) => {
    return {
        type: 'PASSWORD_ENTERED',
        text
    }
}