import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormInput from '../forms';

export default class SignUp extends Component {
    render() {
        return (
            <div>
                <h1>S'inscrire</h1>
                <div>
                        <SignUpForm className="card card-block">
                            <FormInput name="lastname" label="Nom du titulaire du compte" className="col-xs-12"/>
                            <FormInput name="firstname" label="Prénom du titulaire du compte" className="col-xs-12"/>
                            <FormInput name="email" label="Adresse mail" className="col-xs-12"/>
                            <FormInput name="emailconf" label="Confirmez l'adresse mail" className="col-xs-12"/>
                            <FormInput type="password" name="password" label="Mot de passe" className="col-xs-12"/>
                            <FormInput type="password" name="passwordconf" label="Confirmation mot de passe" className="col-xs-12"/>
                            <FormInput name="company" label="Entreprise" className="col-xs-12"/>
                            <FormInput name="idhvac" label="Numéro de série du nouvel HVAC" className="col-xs-12"/>

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
            }}>
                {action}
            </button>
        </div>
    </form>
);




const mapStateToSignUpFormProps = (state) => ({
    inputs: state.inputs,
});
const mapDispatchToSignUpFormProps = (dispatch, ownProps) => ({
    onSubmit: (inputs) => {
        dispatch(SignUp({lastname: inputs.lastname.value, firstname: inputs.firstname.value, email: inputs.email.value,
            emailconf: inputs.emailconf.value, password: inputs.password.value, passwordconf: inputs.passwordconf.value,
         company: inputs.company.value, IDHVAC: inputs.IDHVAC.value}));
    }
});

const SignUpForm = connect(mapStateToSignUpFormProps, mapDispatchToSignUpFormProps)(Form);