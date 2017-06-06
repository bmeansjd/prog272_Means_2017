/*
import React from 'react';
import ReactDOM from 'react-dom';
/!*
 import App from './components/App';
 import Address from './components/Address';
 *!/
import Header from './components/Header';
import addresses from './address-list';
//import './css/index.css';
// TODO: Remove unused
//import logo from './images/logo.svg';

ReactDOM.render(
    <div>
        <Header/>
    </div>,
    document.getElementById('root')
);*/
import React from 'react';
import ReactDOM from 'react-dom';
import DataMaven from './components/DataMaven';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


ReactDOM.render(
    <div>
        <Router>
            <DataMaven/>
        </Router>
    </div>,
    document.getElementById('root')
);