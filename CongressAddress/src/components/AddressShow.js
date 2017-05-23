import React,{Component}from 'react';
//import ReactDOM from 'react-dom';
//import App from './App';
import addresses from '../address-list';
import '../css/index.css';
//import '../App.css';
import  AddressEdit from './AddressEdit';
import Address from './Address';
import AddressShow from './AddressShow';


class AddressShow extends Component {


    constructor(props) {
        super(props);
        console.log('SHOW ADDRESS CONSTRUCTOR', this.props.address);
    }



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
