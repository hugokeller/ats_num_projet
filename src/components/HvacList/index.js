import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormInput from '../forms';

export default class HvacList extends Component {
    render() {
        return (
            <div>
                <h1>Liste de mes HVACs</h1>
                <div>
                    <HvacListForm className="card card-block">


                        <select id="myCombo">
                            <option value="01"> {'Nom HVAC: ' + hvacs[0].name + ' -- ID HVAC: ' + hvacs[0].IDHVAC} </option>
                            <option value="02"> {'Nom HVAC: ' + hvacs[1].name + ' -- ID HVAC: ' + hvacs[1].IDHVAC} </option>
                            <option value="03"> {'Nom HVAC: ' + hvacs[2].name + ' -- ID HVAC: ' + hvacs[2].IDHVAC} </option>
                        </select>

                    </HvacListForm>
                </div>
            </div>
        )
    }
};

var hvacs = [
    {
        name: "Fourvière", IDHVAC: "1689895896", purchasedate: "19/05/2007", lastpowerconsumed: "156KW"
    },

    {
        name: "St Just", IDHVAC: "1588794635", purchasedate: "03/12/2012", lastpowerconsumed: "114KW"
    },

    {
        name: "Bellecour", IDHVAC: "1598784361", purchasedate: "25/03/2002", lastpowerconsumed: "78KW"
    }

];

export const Form = ({children, className, action = 'Afficher HVAC', onSubmit, inputs}) => (
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

const mapStateToHvacListFormProps = (state) => ({
    inputs: state.inputs,
});
const mapDispatchToHvacListFormProps = (dispatch, ownProps) => ({
    onSubmit: (inputs) => {
        dispatch(HvacList({lastname: inputs.lastname.value,}));
    }
});

const HvacListForm = connect(mapStateToHvacListFormProps, mapDispatchToHvacListFormProps)(Form);
