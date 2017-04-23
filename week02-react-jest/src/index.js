// TODO: Charlie added React from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Address from './components/Address';
import './index.css';
import Elfheader from './components/Elfheader';
//import addresses from './address-list'

var address = {
        firstName: 'unknown',
        lastName: 'unknown'
    };

ReactDOM.render(
    <div>
        <Elfheader/>
        <App/>
        <Address address={address}/>


    </div>,

    document.getElementById('root')
);
