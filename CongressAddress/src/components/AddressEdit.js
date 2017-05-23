import React,{Component}from 'react';
//import ReactDOM from 'react-dom';
//import App from './App';
import addresses from '../address-list';
import '../css/index.css';
//import '../App.css';
import AddressEdit from './AddressEdit';


class AddressShow extends Component {


    constructor(props) {
        super(props);
        console.log('SHOW ADDRESS CONSTRUCTOR', this.props.address);
    }

    onNameChange = (event) => {
        this.log("ON NAME CHANGE");
        const address = addresses[this.addressIndex];
        switch (event.target.id) {
            case 'elfFN':
                address.firstName = event.target.value;
                break;
            case 'elfLN':
                address.lastName = event.target.value;
                break;
            // ETC
            default:
                throw new Error('OH NO BAD CASE in Address onNameChange');
        }
        this.setState({
            address: address
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

export default AddressShow;
