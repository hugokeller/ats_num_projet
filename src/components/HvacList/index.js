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
                    <ul id = "listbox" className="list-group">
                        {this.state.hvacs.map((hvac, i) =>
                        <HvacItem key={i} {...hvac} />
                        )}
                    </ul>
                </div>
            </div>
        )
    }
};


class HvacItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCollapsed: false
        }
    }

    collapse() {
        console.log(this.state.isCollapsed);
        if (!this.state.isCollapsed) {
            this.setState({
                isCollapsed: true
            })
        } else {
            this.setState({
                isCollapsed: false
            })
        }
    }

    render() {
        return (
            <Router>
                <li className="col-xs-12 list-group-item">
                    <div className="col-xs-12">
                        <label className="col-xs-3">{this.props.sNomHvac}</label>
                        <label className="col-xs-3">{this.props.sMatricule}</label>
                        <button className="col-xs-3" onClick={this.collapse.bind(this)}><Link
                            to="/hvac">Consulter</Link></button>
                    </div>
                    {this.state.isCollapsed ?
                        <Route path="/hvac" hvac={this.props} component={() => (<Hvac hvac={this.props}/>)}/> :
                        null
                    }
                </li>
            </Router>
        )
    }
}

