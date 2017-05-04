/**
 * Created by bcuser on 4/17/17.
 */
import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

class Address extends Component {

    constructor(props) {
        super(props);

        console.logs('TEST PROPS',props);
        if (!this.propsaddress){
        throw "no props in Address. You mut pass n props";
    }
    //console.log( )
        this.state = {
            aFirstName: this.props.address[index].firstName,
            lastName: this.props.address.lastName
        }
    }
/*
    getAddress = () => {
        this.setState({
            firstName: 'Brenda',
            lastName: 'Means'


        })
    };*/

    render() {
        return <div className="App">

            <p className="App-intro">
                firstName:{this.state.firstName}
            </p>
            <button className="getAddress" onClick={this.getAddress}>"Get Address"</button>
        </div>
    };
}
export default Address




