import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormInput from '../forms';
import {postNewUser} from '../../actions'
import sha256 from 'sha256'

export default class SignUp extends Component {
    render() {
        return (
            <div>
                <h1>S'inscrire</h1>
                <div>
                    <SignUpForm className="card card-block">
                        <div className="col-xs-6">
                            <FormInput name="lastname" label="Nom du titulaire du compte" className="col-xs-6"/>
                            <FormInput name="firstname" label="Prénom du titulaire du compte" className="col-xs-6"/>
                            <FormInput name="company" label="Entreprise" className="col-xs-6"/>
                        </div>   
                        <div className="col-xs-6">
                            <FormInput name="email" label="Adresse mail" className="col-xs-6"/>
                            <FormInput type="password" name="password" label="Mot de passe" className="col-xs-6"/>
                            <FormInput type="password" name="passwordconf" label="Confirmation mot de passe" className="col-xs-6"/>
                        </div>
                    </SignUpForm>
                </div>
            </div>
        )
    }
}

export const Form = ({children, className, action = 'Inscription', onSubmit, inputs}) => (
    <form className={className}>
        {children}
        <div className="form-group col-xs-12">
            <button type="submit" className="btn btn-success " onClick={(e) => {
                e.preventDefault();
                onSubmit(inputs);
                {setTimeout(RedirectionJavascript(), 3000)}
            }}>
                {action}
            </button>
        </div>
    </form>
);

function RedirectionJavascript(){
    document.location.href="http://localhost:3000/login";
}


const mapStateToSignUpFormProps = (state) => ({
    inputs: state.inputs,
});
const mapDispatchToSignUpFormProps = (dispatch, ownProps) => ({
    onSubmit: (inputs) => {
        dispatch(postNewUser({
            firstname: inputs.firstname.value,
            lastname: inputs.lastname.value,
            company: inputs.company.value,
            email: inputs.email.value,
            password: sha256(inputs.password.value),
            passwordconf: sha256(inputs.passwordconf.value)
        }));
    }
});

const SignUpForm = connect(mapStateToSignUpFormProps, mapDispatchToSignUpFormProps)(Form);