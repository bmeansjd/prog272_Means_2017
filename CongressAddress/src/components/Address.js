import React,{Component}from 'react';
//import ReactDOM from 'react-dom';
//import App from './App';
import addresses from '../address-list';
import AddressEdit from './AddressEdit';
import AddressShow from './AddressShow';
//import './css/index.css';

//import '../App.css';


class Address extends Component {


    constructor(props) {
        super(props);

        console.log('ADDRESS PROPS', typeof this.props);
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


    render() {
        if (!this.quiet) { console.log("ADDRESS RENDER"); }
        return (
            <div className="App">
                <AddressEdit
                    address={this.state.address}
                    onAddressChange={this.onAddressChange}
                    onNameChange={this.onNameChange}
                />
                <AddressShow
                    address={this.state.address}
                    onAddressChange={this.onAddressChange}
                />
            </div>
        );
    }
}

export default Address;
