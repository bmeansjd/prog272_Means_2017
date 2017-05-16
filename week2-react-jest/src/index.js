import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Address from './components/Address'
import Header from './components/Header';
import addresses from './address-list';
import './index.css';

ReactDOM.render(
    <div>
        <Header/>
        <App />
        <Address addressList={addresses}/>
    </div>,
    document.getElementById('root')
);