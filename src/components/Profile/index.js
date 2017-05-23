import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormInput from '../forms'
import profile from '../../actions';

export default class Profile extends Component {
    render() {
        return (
            <div>
            <h1>Mon compte</h1>
                <div>
                     <ProfileForm className="card card-block">
                         <FormInput name="lastname" label="Nom utilisateur" className="col-xs-12"/>
                         <h3>Changer d'adresse mail</h3>
                         <FormInput name="email" label="Adresse mail actuelle" className="col-xs-12"/>
                         <FormInput name="emailnew" label="Nouvelle adresse mail" className="col-xs-12"/>
                         <FormInput name="emailconf" label="Confirmez l'adresse mail" className="col-xs-12"/>
                         <h3>Changer mot de passe</h3>
                         <FormInput type="password" name="password" label="Mot de passe actuel" className="col-xs-12"/>
                         <FormInput type="password" name="passwordnew" label="Nouveau mot de passe" className="col-xs-12"/>
                         <FormInput type="password" name="passwordconf" label="Confirmation mot de passe" className="col-xs-12"/>
                     </ProfileForm>
                </div>
            </div>
        )
    }
}

export const Form = ({children, className, action = 'Valider', onSubmit, inputs}) => (
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


const mapStateToProfileFormProps = (state) => ({
    inputs: state.inputs,
});
const mapDispatchToProfileFormProps = (dispatch, ownProps) => ({
    onSubmit: (inputs) => {
        dispatch(Profile({email: inputs.email.value, emailnew: inputs.emailnew.value, emailconf: inputs.emailconf.value,
            password: inputs.password.value, passwordnew: inputs.passwordnew.value, passwordconf: inputs.passwordconf.value}));
    }
});
const ProfileForm = connect(mapStateToProfileFormProps, mapDispatchToProfileFormProps)(Form);