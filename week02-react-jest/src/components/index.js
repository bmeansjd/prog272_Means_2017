import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './components/index.css';
import Elfheader from './components/Elfheader';

var address = {
    firstName: 'unknown',
    lastName: 'unknown'
};

ReactDOM.render(
    <div>
    <Elfheader/>
        <ElfMenu/>

  </div>,

  document.getElementById('root')
);
