/**
 * Created by bcuser on 4/17/17.
 */
import logo from '../logo.svg';
import React, {Component} from 'react';
import'../App.css';

class Elfheader extends Component {

    render() {


        return (

            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2> Welcome to Prog272</h2>
                </div>
            </div>
        )
            ;
    }
}
export default Elfheader;;