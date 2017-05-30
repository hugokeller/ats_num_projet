import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem, Jumbotron} from 'react-bootstrap';
import HvacList from '../HvacList';
import AddHvac from '../AddHvac';
import Profile from '../Profile';
import Login from '../Login';
import SignUp from '../SignUp';
import './style.css';


class Home extends Component {

    render() {
        return (
        <div class="jumbotron">
            <h1>Page d'accueil - Gestion des HVAC</h1>
            <p>Bienvenue sur le site de contrôle de vos HVACs. <br />Vous pouvez ici consulter les derniers relevés de performance de vos HVACs, créer un compte pour d'autres utilisateurs ou ajouter d'autres HVACs</p>
            <p><a class="btn btn-primary btn-lg" href="#" role="button"><Link to="/meshvac">Consulter les données de mes HVACs</Link></a></p></div>

        );
    }
}

export default Home;