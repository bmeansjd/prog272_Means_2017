import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/ElfHeader';
import App from './components/App';
import Address from './components/Address'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import addresses from './address-list';

ReactDOM.render(
    <div>
        <Header/>
        <Address addressList={addresses} />
    </div>,
    document.getElementById('root')
);
