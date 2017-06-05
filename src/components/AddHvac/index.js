import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormInput from '../forms';
import {addHvac} from '../../actions';


export default class AddHvac extends Component {
    render() {
        return (
            <div>
            <h1>Ajouter un HVAC</h1>
                <div>
                    <AddHvacForm className="card card-block">
                        <FormInput name="sNomHvac" label="Nom HVAC" className="col-xs-12"/>
                        <FormInput name="sMatricule" label="Matricule HVAC" className="col-xs-12"/>
                        <FormInput name="ville" label="Ville" className="col-xs-12"/>
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

const mapDispatchToAddhvacFormProps = (dispatch) => {
    return {
        onSubmit: (inputs) => {
            dispatch(addHvac({
                sNomHvac: inputs.sNomHvac,
                sMatricule: inputs.sMatricule,
                ville: inputs.ville
            }));
        }
    };
};
const AddHvacForm = connect(mapStateToAddhvacFormProps, mapDispatchToAddhvacFormProps)(Form);