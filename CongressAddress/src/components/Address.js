/*
 * Created by bcuser on 5/7/17.
 */
import React, {Component} from 'react';
import AddressShow from '../AddressShow';
import addresses from '../address-LIST';
import '../css/APP-CSS';
import {
    saveToLocalStorage,
    clearLocalStorage,
    getLocalStorage
} from'../assets/elf-local-storage';

class Address extends Component {

    constructor(props) {
        super(props);


        this.addressIndex=0;
        //this.saveAddress(address);
        console.log('TEST PROPS', props);

        if (!this.props.address) {

            throw new Error("No props in Address. You mut pass n props");
        }
        console.log()
        const index = 0
        this.state = {
            firstName: this.props.address.firstName,
            lastName: this.props.address.lastName
        };
    }



    const address = addresses[this.addressIndex];
    addresses.forEach(function(address){
        saveToLocalStorage(address);
    }













    getAddress = () => {
        this.setState({
            firstName: 'Brenda',
            lastName: 'Means'


        })
    };

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

