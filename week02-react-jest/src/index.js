import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Address from './components/Address';
import './index.css';
import Elfheader from ',/Elfheader'




var address =
{

    firstName : 'foo',
    lastName : 'bar'
};

ReactDOM.render(
    <div>
    <Elfheader/>
        <App/>
        <Address firstName: "foobar"/>


  </div>,

  document.getElementById('root')
);
