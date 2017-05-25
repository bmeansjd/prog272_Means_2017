/**
 * Created by bcuser on 5/3/17.
 */
import React,{Component}from 'react';
//import ReactDOM from 'react-dom';
//import App from './App';
import addresses from '../address-list';
import '../css/index.css';
//import '../App.css';


class AddressShow extends Component {


    constructor(props) {
        super(props);
        console.log('SHOW ADDRESS CONSTRUCTOR', this.props.address);
    }



    render() {
        this.log("SHOW ADDRESS RENDER");

        return (
            <div className="App">
                <p className="App-intro">
                    firstName: {this.props.address.firstName}
                </p>

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