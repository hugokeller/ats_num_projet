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


                            <select id = "listbox">
                                <option value="01"> {'Nom HVAC: ' + hvacs[0].name + ' -- ID HVAC:' + hvacs[0].idhvac}</option>
                                <option value="02"> {'Nom HVAC: ' + hvacs[1].name + ' -- ID HVAC: ' + hvacs[1].idhvac} </option>
                                <option value="03"> {'Nom HVAC: ' + hvacs[2].name + ' -- ID HVAC: ' + hvacs[2].idhvac} </option>
                            </select>



                        </HvacListForm>

                    </div>
            </div>
        )
    }
};

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
        dispatch(HvacList({name: inputs.name.value, idhvac: inputs.idhvac.value, purchasedate: inputs.purchasedate.value, lastpowerconsumed: inputs.lastpowerconsumed.value}));
    }
});

const HvacListForm = connect(mapStateToHvacListFormProps, mapDispatchToHvacListFormProps)(Form);



    var hvacs = [

    {
        name: "Fourvière", idhvac: "1689895896", purchasedate: "19/05/2007", lastpowerconsumed: "156KW"
    },

    {
        name: "St Just", idhvac: "1588794635", purchasedate: "03/12/2012", lastpowerconsumed: "114KW"
    },

    {
        name: "Bellecour", idhvac: "1598784361", purchasedate: "25/03/2002", lastpowerconsumed: "78KW"
    }
    ];
    let MaxHvac = hvacs.length - 1;

    function addButton(nombrehvac) {
        var i;
        for (i=0; i < nombrehvac; i++) {
            var button = document.createElement("input") ;
            button.type = "button" ;
            button.value = 'Nom HVAC: ' + hvacs[i].name + ' -- ID HVAC:' + hvacs[i].IDHVAC ;
            button.name = i ;

        }
    }

