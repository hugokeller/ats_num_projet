import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import Home from '../Home';
import HvacList from '../HvacList';
import AddHvac from '../AddHvac';
import Profile from '../Profile';
import Login from '../Login';
import SignUp from '../SignUp';
import Logout from '../Logout';
import './style.css';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar collapseOnSelect>
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
                                {sessionStorage.getItem('jwt') ?
                                    <NavItem eventKey={1}><Link to="/moncompte">Mon Compte</Link></NavItem>
                                        : null}
                                {sessionStorage.getItem('jwt') ?
                                    <NavItem eventKey={2}><Link to ="/logout">Se déconnecter</Link></NavItem>
                                        : null}
                                {!sessionStorage.getItem('jwt') ?
                                    <NavItem eventKey={3}><Link to="/login">Se connecter</Link></NavItem>
                                        : null}
                                {!sessionStorage.getItem('jwt') ?
                                    <NavItem eventKey={4}><Link to="/signup">Inscription</Link></NavItem>
                                        : null}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <hr/>

                    <Route exact path="/" component={Home}/>
                    <Route path="/meshvac" component={HvacList}/>
                    <Route path="/ajouterhvac" component={AddHvac}/>
                    <Route path="/moncompte" component={Profile}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/logout" component={Logout}/>
                    <Route path="/signup" component={SignUp}/>
                </div>
            </Router>
        );
    }
}