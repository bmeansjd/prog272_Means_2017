/**
 * Created by bcuser on 4/17/17.
 */
import logo from '../multipicture.svg';
// TODO: You were using component not Component
import React, {Component} from 'react';
// TODO: Cleaned up this import
import '../App.css';

// TODO: You were extending component not Component
class Elfheader extends Component {

    render() {
        return (

            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to Prog272</h2>
                </div>
            </div>
        );
    }
}

export default Elfheader;