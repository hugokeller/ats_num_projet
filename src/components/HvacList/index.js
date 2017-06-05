import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import fetch from 'isomorphic-fetch';
import Hvac from '../Hvac';

export default class HvacList extends Component {
    constructor(props){
        super(props);
        this.state = {
            hvacs : []
        };
    }
    fetchHvacs(idUser){
        fetch('http://localhost:8080/hvacs/read', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': sessionStorage.getItem('jwt')
            },
            body: JSON.stringify({idClient: idUser})
        })
            .then( response => response.json())
            .then( json => {
                console.log('hvacs', json);
                this.setState({
                    hvacs:json
                });
            });
    }
    componentWillMount() {
        this.fetchHvacs(sessionStorage.getItem('idUser'))
    }
    render() {
        return (
            <div>
                <h1>Liste de mes HVACs</h1>
                <div>
                    <ul id = "listbox">
                        {this.state.hvacs.map((hvac, i) =>
                        <HvacItem key={i} {...hvac} />
                        )}
                        {/*<li value="01"><Link to='/hvac1' > {'Nom HVAC: ' + this.state.hvacs[0].name + ' -- ID HVAC:' + this.state.hvacs[0].idhvac} </Link></li>*/}
                    </ul>
                </div>
            </div>
        )
    }
};

class HvacItem extends Component{
    constructor(props){
        super(props);
        this.collapse = this.collapse.bind(this);
        this.state = {
            isCollapsed : false
        }
    }
    collapse(e) {
        e.preventDefault;
        <Hvac/>
        this.setState({
git
        })
    }
    render() {
        return (
            <Router>
                <li className="col-xs-12">
                    <label className="col-xs-3">{this.props.sNomHvac}</label>
                    <label className="col-xs-3">{this.props.sMatricule}</label>
                    <button className="col-xs-3" onClick={this.collapse}>Consulter</button>
                    <Route path="/hvac" hvac={this.props} component={Hvac}/>
                </li>
            </Router>
        )
    }
}