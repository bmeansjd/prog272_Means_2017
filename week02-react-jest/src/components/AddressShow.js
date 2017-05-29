/**
 * Created by bcuser on 5/3/17.
 */
import React, {Component}from 'react';
//import ReactDOM from 'react-dom';
//import App from './App';
import addresses from '../Address-List';
import '../css/index.css';
import AddressEdit from './AddressEdit';
//import '../App.css';
import Logger from '../assets/elf-logger';
const logger = new Logger('address-show');

class AddressShow extends Component {

    constructor(props) {
        super(props);
        console.log('SHOW ADDRESS CONSTRUCTOR', this.props.address);
    }

    render() {
        const IDoNotKnowWhyThisIsHere = (
            <div className="App">
                <p className="App-intro">
                    firstName: {this.props.address.firstName}
                </p>

                <AddressEdit
                    address={this.props.address}
                    onAddressChange={this.onAddressChange}
                    onNameChange={this.onNameChange}
                />
                <AddressShow
                    address={this.props.address}
                    onAddressChange={this.onAddressChange}
                />
            </div>);

        logger.log("SHOW ADDRESS RENDER");

        return (
            <div>
                <p>What should I put here?</p>
            </div>
        )
    }
}

export default AddressShow;