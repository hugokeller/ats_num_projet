import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormInput from '../forms'
import {getUserInformation, changeEmail, changePassword} from '../../actions'

export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            sPrenomClient: 'Aucun',
            sNomClient: 'Nom',
            sEntreprise: 'Aucune Entreprise',
            sEmailClient: 'aucun email',
            hvacCount: 'Aucun hvac'
        };
    }
    componentWillMount() {
        getUserInformation(sessionStorage.getItem('idUser'))
            .then(json => {
                const userInfo = json;
                this.setState({
                    sPrenomClient: userInfo.sPrenomClient,
                    sNomClient: userInfo.sNomClient,
                    sEntreprise: userInfo.sEntreprise,
                    sEmailClient: userInfo.sEmailClient
                });
            });

    }
    render() {
        return (
            <div>
            <h1>Mon compte</h1>
                <div className="col-xs-6">
                    <h2 className="text-center">Mes informations</h2>
                    <h4 className="col-xs-12">Bonjour {this.state.sPrenomClient + ' ' + this.state.sNomClient}</h4>
                    <label htmlFor="entreprise" className="col-xs-12">Entreprise : {this.state.sEntreprise}</label>
                    <label htmlFor="hvacCount" className="col-xs-5">Nombre de HVACs : {this.state.hvacCount}</label>
                    <button className="col-xs-4">Consulter mes hvacs</button>
                    <label className="col-xs-12">Email : {this.state.sEmailClient}</label>
                </div>
                <div className="col-xs-6">
                    <EmailForm className="card card-block col-xs-12">
                        <h4>Changer d'adresse mail</h4>
                        <FormInput name="emailnew" label="Nouvelle adresse mail" className="col-xs-6"/>
                        <FormInput name="emailconf" label="Confirmez l'adresse mail" className="col-xs-6"/>
                        <FormInput type="password" name="password" label="Entrez votre mot de passe pour confirmer" className="col-xs-6"/>
                    </EmailForm>
                    <PasswordForm className="card card-block col-xs-12">
                        <h4>Changer mot de passe</h4>
                        <FormInput type="password" name="passwordnew" label="Nouveau mot de passe" className="col-xs-6"/>
                        <FormInput type="password" name="passwordconf" label="Confirmation mot de passe" className="col-xs-6"/>
                        <FormInput type="password" name="password" label="Entrez votre mot de passe pour confirmer" className="col-xs-6"/>
                    </PasswordForm>
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


const mapStateToPasswordFormProps = (state) => ({
    inputs: state.inputs,
});
const mapDispatchToPasswordFormProps = (dispatch, ownProps) => ({
    onSubmit: (inputs) => {
        dispatch(changeEmail({
            password: inputs.password.value,
            emailnew: inputs.emailnew.value,
            emailconf: inputs.emailconf.value,
            }));
    }
});

const PasswordForm = connect(mapStateToPasswordFormProps, mapDispatchToPasswordFormProps)(Form);

const mapStateToEmailFormProps = (state) => ({
    inputs: state.inputs,
});
const mapDispatchToEmailFormProps = (dispatch, ownProps) => ({
    onSubmit: (inputs) => {
        dispatch(changePassword({
            password: inputs.password.value,
            passwordnew: inputs.passwordnew.value,
            passwordconf: inputs.passwordconf.value}));
    }
});

const EmailForm = connect(mapStateToEmailFormProps, mapDispatchToEmailFormProps)(Form);

