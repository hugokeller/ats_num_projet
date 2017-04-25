import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormInput from '../forms';
import logIn from '../../actions';

export default class Login extends Component {
    render() {
        return (
            <div>
                <h1>Se connecter</h1>
                <div>
                    <LoginForm className="card card-block">
                        <FormInput name="email" label="email" className="col-xs-12"/>
                        <FormInput type="password" name="password" label="password" className="col-xs-12"/>
                    </LoginForm>
                </div>
            </div>
        )
    }
}

export const Form = ({children, className, action = 'submit', onSubmit, inputs}) => (
    <form className={className}>
        {children}
        <div className="form-group col-xs-12">
            <button type="submit" className="btn btn-success " onClick={(e) => {
                e.preventDefault();
                onSubmit(inputs);
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
        dispatch(logIn({email: inputs.email.value, password: inputs.password.value}));
    }
});
const LoginForm = connect(mapStateToLogInFormProps, mapDispatchToLogInFormProps)(Form);