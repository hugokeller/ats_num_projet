import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import Home from '../Home';
import HvacList from '../HvacList';
import AddHvac from '../AddHvac';
import Profile from '../Profile';
import Login from '../Login';
import SignUp from '../SignUp';
import './style.css';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar inverse collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Link to="/">Accueil</Link>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                            <Nav>
                                <NavItem eventKey={1}><Link to="/meshvac">Mes HVAC</Link></NavItem>
                                <NavItem eventKey={2}><Link to="/ajouterhvac">Ajouter un HVAC</Link></NavItem>
                            </Nav>
                            <Nav pullRight>
                                <NavItem eventKey={1}><Link to="/moncompte">Mon Compte</Link></NavItem>
                                <NavItem eventKey={2}><Link to="/login">Se connecter</Link></NavItem>
                                <NavItem eventKey={3}><Link to="/signup">S'inscrire</Link></NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <hr/>

                    <Route exact path="/" component={Home}/>
                    <Route path="/meshvac" component={HvacList}/>
                    <Route path="/ajouterhvac" component={AddHvac}/>
                    <Route path="/moncompte" component={Profile}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={SignUp}/>
                </div>
            </Router>
        );
    }
}