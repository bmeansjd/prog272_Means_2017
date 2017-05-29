import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/ElfHeader';
//import App from './components/App';
import DataMaven from './components/DataMaven'
//import registerServiceWorker from './registerServiceWorker';
import './css/index.css';
import addresses from './Address-List';

ReactDOM.render(
    <div>
        <Header/>
        <DataMaven />
    </div>,
    document.getElementById('root')
);
