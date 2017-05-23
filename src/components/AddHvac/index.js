import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormInput from '../forms';
import addhvac from '../../actions';


export default class AddHvac extends Component {
    render() {
        return (
            <div>
            <h1>Ajouter un HVAC</h1>
                <div>
                    <AddHvacForm className="card card-block">
                        <FormInput name="Nom HVAC" label="Nom HVAC" className="col-xs-12"/>
                        <FormInput name="Matricule HVAC" label="Matricule HVAC" className="col-xs-12"/>
                        <FormInput name="Nom du Client" label="Nom du Client" className="col-xs-12"/>
                        <FormInput name="Situation Geographique" label="Situation Geographique" className="col-xs-12"/>
                    </AddHvacForm>
                </div>
            </div>
        )
    }
}
export const Form = ({children, className, action = 'Ajouter', onSubmit, inputs}) => (
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


const mapStateToAddhvacFormProps = (state) => ({
    inputs: state.inputs,
});

const mapDispatchToAddhvacFormProps = (dispatch, ownProps) => {
    return {
        onSubmit: (inputs) => {
            dispatch(addhvac({
                Nom_HVAC: inputs.Nom_HVAC, Matricule_HVAC: inputs.Matricule_HVAC,
                Nom_du_Client: inputs.Nom_du_Client, Situation_Geographique: inputs.Situation_Geographique
            }));
        }
    };
};
const AddHvacForm = connect(mapStateToAddhvacFormProps, mapDispatchToAddhvacFormProps)(Form);