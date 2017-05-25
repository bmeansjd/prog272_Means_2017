import React,{Component}from 'react';
//import ReactDOM from 'react-dom';
//import App from './App';
import addresses from '../address-list';
import '../index.css';
//import '../App.css';


class Address extends Component {


    constructor(props) {
        super(props);


       /* logger.log ('Constructor called')

        console.log('ADDRESS PROPS', typeof this.props);
        const address = this.props.addressList[0];
        var unknown = 'UNKNOWN';
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



        const that = this;
        dataLoader.loadAddresses(function(addressCount) {
            if (!addressCount) {
                throw new Error('Cannot get address count in address.js');
            }
            that.addressCount = addressCount;*/

    }


/*

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
*/


    render() {
        logger.log ('ADDRES RENDER')
        if (!this.quiet)
        return (
            <div AddressShow>
                address={this.state.address}
                <p className="App-intro">
                    firstName: {this.state.firstName}

                </p>
                <button className="setAddress" onClick={this.setAddress}>Set Address</button>
            </div>
        )
    };
}

export default Address;




