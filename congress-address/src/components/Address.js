import React, {Component}from 'react';
// TODO: Find index.css with correct relative path
import '../css/index.css';
import 'whatwg-fetch';
import ElfLogger from './elf-logger';
import AddressShow from './AddressShow';
import addresses from './address-list';
import GetAddresses from 'get-address';'
import '../css/App.css';
import{
    saveToLocalStorage,
    clearLocalstorage,
    getLocalStorage} from '../assets/elf-local-storage';



import DataLoader from 'assets/DataLoader';
const dataLoader = new DataLoader();
const logger = new ElfLogger();

class Address extends Component {
    constructor (props) {
        super(props);

        this.addressIndex = 0;
        //this.saveAddress(addresses);

        const address =addresses[this.addressesIndex];
        addresses.forEach(function(address){
            saveToLocalStorage(address);
        });

        this.state = {
            address : address
        };
        this.quiet =true;
        this.onAddressChange = this.onAddressChange.bind(this);

    }



/*
class Address extends Component {

    constructor(props) {
        super(props);

        // TODO: Throw exception if addressList is undefined
        if (!this.props.addressList) {
            throw new Error('Elf error, no addressList in ' + this.constructor.name);
*/

/*
// Code ommitted here.
// Then, in the constructor:
            constructor(props) {
                super(props);
                logger.log('Constructor called');
                //localStorage.clear();

                this.addressIndex = 0;

                const that = this;
                dataLoader.loadAddresses(function(addressCount) {
                    if (!addressCount) {
                        throw new Error('Cannot get address count in address.js');
                    }
                    that.addressCount = addressCount;
                });
                // AND SO ON
            }*/

       /* }*/

    const address = this.props.addressList[0];
        this.state = {
            firstName: address.firstName,
            lastName: address.lastName,
            street: address.street,
            city: address.city,
            state: address.state,
            zip: address.zip,
            phone: address.phone,
            website: address.website
        }


    setAddress = () => {
        const address = this.props.addressList[1];

        this.setState({
            firstName: address.firstName,
            lastName: address.lastName,
            street: address.street,
            city: address.city,
            state: address.state,
            zip: address.zip,
            phone: address.phone,
            website: address.website
        })
    };

    fetchAddress = () => {
        const that = this;

        fetch('./addresses.json').then(function(data) {
            const addresses = data.json();
            console.log(addresses);
            return addresses;
        }).then(function (data) {
            console.log(JSON.stringify(data, null, 4));
            that.addresses = data;
            that.setLocalStorage();
        }).catch(function (err) {
            logger.log(err);
        })

    };


    // TODO: Use an ID not a className to identify this button
    render(){
        return (
            <div className="App">
                <p className="App-intro">
                    firstName: {this.state.firstName}
                </p>

                <button id="setAddress" onClick={this.setAddress}>Set Address</button>

            </div>
        )
    }
}

export default Address;