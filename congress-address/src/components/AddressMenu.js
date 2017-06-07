/**
 * Created by bcuser on 6/6/17.
 */

import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom';
import '../css/App.css';

class AddressMenu extends Component {

    render() {
        return (

            <div className='AppLink'>
                <ul>
                    <li><Link to='/'>AddressShow</Link></li>
                    <li><Link to='/edit'>AddressEdit</Link></li>
                    <li><Link to='/small'>SmallNumbers</Link></li>
                </ul>
            </div>

        );
    }
}

export default AddressMenu;
