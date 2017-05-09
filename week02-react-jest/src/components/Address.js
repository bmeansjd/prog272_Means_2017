/**
 * Created by brenda on 4/17/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Address from './components/Address'
import addresses from './address-list';
import './index.css';


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

        this.state = {
            nine: '0',
            firstName: 'Brenda',
            lastName:''
        };

    }


        bar = () => {


            this.setState({
                nine: '9',
                firstName: 'Brenda',
                lastName: 'Means'
            })

        };


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

        return (
            <div>
                <App />
                <Address addressList={addresses} />
            </div>,
            document.getElementById('root')
        );

        export default addresses;
    }
}

export default App;



