import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.css';


class Home extends Component {

    render() {
        return (
        <div className="jumbotron">
            <h1>Page d'accueil - Gestion des HVAC</h1>
            <p>Bienvenue sur le site de contrôle de vos HVACs. <br />Vous pouvez ici consulter les derniers relevés de performance de vos HVACs, créer un compte pour d'autres utilisateurs ou ajouter d'autres HVACs</p>
            <p><a className="btn btn-primary btn-lg" href="#" role="button"><Link to="/meshvac">Consulter les données de mes HVACs</Link></a></p></div>

        );
    }
}

export default Home;