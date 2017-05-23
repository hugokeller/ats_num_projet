

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

export const addhvac = (user) => {
    return fetch(`${GET_AUTH_URL}`, {
        method: 'POST',
        headers: JSON_HEADERS,
        credentials: 'same-origin',
        body: JSON.stringify({Nom_HVAC: user.Nom_HVAC, Matricule_HVAC: user.Matricule_HVAC, Nom_du_Client:user.Nom_du_Client,
        Situation_Geographique: user.Situation_Geographique})
    })
        .then(body => body.json());
    // .then(json => dispatch(receiveChallenge(json, user.Nom_HVAC, user.Matricule_HVAC, user.Nom_du_Client, user.Situation_Geographique )))
    // .then(json => dispatch(fetchUsers(fromReducers.getToken(getState()))))
    // .then(json => dispatch(fetchDevices(fromReducers.getToken(getState()))))
    // .then(() => dispatch(goHome()))
    // .catch(error => dispatch(receiveFailure(error)));
};

export const profile = (user) => {
    return fetch(`${GET_AUTH_URL}`, {
        method: 'POST',
        headers: JSON_HEADERS,
        credentials: 'same-origin',
        body: JSON.stringify({email: user.email, emailnew: user.emailnew, emailconf:user.emailconf,
            password: user.password, passwordnew: user.passwordnew, passwordconf: user.passwordconf})
    })
        .then(body => body.json());
    // .then(json => dispatch(receiveChallenge(json, user.password)))
    // .then(json => dispatch(fetchUsers(fromReducers.getToken(getState()))))
    // .then(json => dispatch(fetchDevices(fromReducers.getToken(getState()))))
    // .then(() => dispatch(goHome()))
    // .catch(error => dispatch(receiveFailure(error)));
};