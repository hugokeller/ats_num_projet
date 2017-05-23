import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem, Jumbotron} from 'react-bootstrap';
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
                        <Navbar.Collapse>
                            <Nav>
                                {/*<NavDropdown eventKey={1} title="Mes HVACs" id="basic-nav-dropdown">*/}
                                    {/*<MenuItem eventKey={1.1}>Premier HVAC</MenuItem>*/}
                                    {/*<MenuItem eventKey={1.2}>Deuxième HVAC</MenuItem>*/}
                                    {/*<MenuItem eventKey={1.3}>Troisième HVAC</MenuItem>*/}
                                    {/*<MenuItem divider />*/}
                                    {/*<MenuItem eventKey={1.3}><Link to="/meshvac">Mes HVAC</Link></MenuItem>*/}
                                {/*</NavDropdown>*/}
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
                    <Route path="/topics" component={Topics}/>
                </div>
            </Router>
        );
    }
}

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
);

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);