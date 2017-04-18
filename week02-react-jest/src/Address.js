/**
 * Created by bcuser on 4/17/17.
 */
import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

class Address extends Component {

    constructor() {
        super(props);
        console.logs(props);
        this.state = {
            firstName: this.props.firstName,
            lastName: 'unknown'
        }
    }

    getAddress = () => {
        this.setState({
            firstName: 'Carly',
            lastName: 'bar'


        })
    };


    render() {
        return (
            <div className="App">

                <p className="App-intro">
                    firstName:{this.state.firstName}
                </p>
                <button className="getAddress" onClick={this.getAddress}>"Get Address"</button>
            </div>

        )
    };
}
export default Address




