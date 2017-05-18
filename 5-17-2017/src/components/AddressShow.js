import React,{Component}from 'react';
//import ReactDOM from 'react-dom';
//import App from './App';
;
import '../css/index.css';
//import '../App.css';
import addresses from '../address-list';

class AddressShow extends Component {


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
