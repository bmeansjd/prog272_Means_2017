/**
 * Created by bcuser on 5/17/17.
 */
import React,{Component}from 'react';
//import ReactDOM from 'react-dom';
//import App from './App';
import addresses from '../address-list';
import '../css/index.css';
//import '../App.css';

/*

class AddressShow extends Component {


    constructor(props) {
        super(props);
        console.log('SHOW ADDRESS CONSTRUCTOR', this.props.address);
    }

*/
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
        this.log("SHOW ADDRESS RENDER");

        return (
            <div className="App">
                <p className="App-intro">
                    firstName: {this.props.address.firstName}
                </p>

                // CODE OMITTED HERE

            </div>
        );
    }
}

export default AddressShow;
