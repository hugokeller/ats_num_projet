import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import fetch from 'isomorphic-fetch';


export default class HvacList extends Component {
    constructor(props){
        super(props);
        this.state = {
            hvacs : [

                {
                    name: "Fourvière", idhvac: "1689895896", purchasedate: "19/05/2007", lastpowerconsumed: "156KW"
                },

                {
                    name: "St Just", idhvac: "1588794635", purchasedate: "03/12/2012", lastpowerconsumed: "114KW"
                },

                {
                    name: "Bellecour", idhvac: "1598784361", purchasedate: "25/03/2002", lastpowerconsumed: "78KW"
                }
            ]
        };
    }
    fetchHvacs(e){
        e.preventDefault;
        fetch('http://localhost:8080/hvacs')
            .then( response => response.json)
            .then( json => {
                console.log(json);
                this.setState({
                    hvacs : json
                });
                console.log('json', json)
            })
    }
    render() {
        // this.fetchHvacs.bind(this);
        return (
            <Router>
            <div>
                <h1>Liste de mes HVACs</h1>
                <div>
                    <ul id = "listbox">

                        <li value="01"><Link to='/hvac1' > {'Nom HVAC: ' + this.state.hvacs[0].name + ' -- ID HVAC:' + this.state.hvacs[0].idhvac} </Link></li>

                        <li value="02"><Link to="/hvac2"> {'Nom HVAC: ' + this.state.hvacs[1].name + ' -- ID HVAC: ' + this.state.hvacs[1].idhvac} </Link></li>

                        <li value="03"><Link to="/hvac3"> {'Nom HVAC: ' + this.state.hvacs[2].name + ' -- ID HVAC: ' +this.state. hvacs[2].idhvac} </Link></li>
                    </ul>
                </div>
            </div>
            </Router>
        )
    }
};

const mapStateToHvacListProps = (state) => ({
    inputs: state.inputs,
});

const mapDispatchToHvacListProps = (dispatch, ownProps) => ({
    onSubmit: (inputs) => {
        dispatch(HvacList({name: inputs.name.value, idhvac: inputs.idhvac.value, purchasedate: inputs.purchasedate.value, lastpowerconsumed: inputs.lastpowerconsumed.value}));
    }
});