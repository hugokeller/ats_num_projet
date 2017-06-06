/**
 * Created by Bobo on 06/06/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormInput from '../forms'
import {getUserInformation, changeEmail, changePassword} from '../../actions'


export default class Login extends Component {
    render() {
        return (
        <body>
            <div>Déconnection réussie. Redirection en cours...</div>
            <script>{setTimeout(RedirectionJavascript, 3000)}</script>
        </body>

        )
    }
}

 function RedirectionJavascript(){
    document.location.href="http://localhost:3000/login";
     sessionStorage.removeItem('jwt');
 }








