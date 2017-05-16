/**
 * Created by bcuser on 5/15/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Address from './components/Address'
import './index.css';

ReactDOM.render(
    <div>
        <App />
        <Address/>
    </div>,
    document.getElementById('root')
);


const unknown = 'unknown';
const addresses = [
    {
        firstName: unknown,
        lastName: unknown,
        street: unknown,
        city: unknown,
        state: unknown,
        zip: unknown
    },
    {
        firstName: 'Patty',
        lastName: 'Murray',
        street: unknown,
        city: 'Seattle',
        state: 'WA',
        zip: unknown
    }

];

export default addresses;