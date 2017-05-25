import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Address from './components/Address';
import Header from './components/Header';
import addresses from './address-list';
//import './css/index.css';
// TODO: Remove unused
//import logo from './images/logo.svg';

ReactDOM.render(
    <router>
        <Header/>
        <App />
        <Address addressList={addresses}/>
    </router>,
    document.getElementById('root')
);