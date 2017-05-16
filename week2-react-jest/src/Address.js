import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Address from './components/Address'
import addresses from './address-list';
import './index.css';

ReactDOM.render(
    <div>
        <App />
        <Address addressList={addresses} />
    </div>,
    document.getElementById('root')
);

class Address extends Component {
    constructor() {
        super();

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

        };
        /*this.state = {
            nine: '0',
            firstName: 'unknown'

        }*/;
    }


    getNine = () => {
        this.setState({
            nine: '9'
        })
    };

   /* getNine = () => {
        this.setState({
            nine: '9'
        })
    };*/

    setAddress = () => {
        this.setState({
            firstName: 'Brenda',
            lastName: 'Means'
        })
    };

    render() {
        return (
            <div className="App">

                <p className="App-intro">
                    firstName: {this.state.firstName}

                </p>
                <button className="setAddress" onClick={this.setAddress}>Set Address</button>
            </div>
        )
    };
}

export default Address;
