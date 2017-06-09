import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormInput from '../forms';
import { logIn, changeInput } from '../../actions';
import sha256 from 'sha256';
import style from './style.css';



export default class Login extends Component {
    render() {
        return (
            <div>
                <h1 className={style.bluecolor}>Se connecter</h1>
                <div>
                    <LoginForm className="card card-block">
                        <FormInput name="email" label="Adresse mail" className="col-xs-3 "/>
                        <FormInput type="password" name="password" label="Mot de passe" className="col-xs-3"/>
                    </LoginForm>
                </div>
            </div>
        )
    }
};

export const Form = ({children, className, action = 'Connexion', onSubmit, inputs}) => (
    <form className={className}>
        {children}
        <div className="form-group col-xs-12">
            <button type="submit" className="btn btn-success " onClick={(e) => {
                e.preventDefault();
                onSubmit(inputs);
                {setTimeout(RedirectionJavascript, 3000)}
            }}>
                {action}
            </button>
        </div>
    </form>
);

const mapStateToLogInFormProps = (state) => ({
    inputs: state.inputs,
});
const mapDispatchToLogInFormProps = (dispatch, ownProps) => ({
    onSubmit: (inputs) => {
        dispatch(logIn({email: inputs.email.value, password: sha256(inputs.password.value)}));
    }
});
const LoginForm = connect(mapStateToLogInFormProps, mapDispatchToLogInFormProps)(Form);

function RedirectionJavascript(){
    document.location.href="http://localhost:3000/moncompte";
}