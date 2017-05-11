/**
 * Created by brenda on 4/17/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Address from './components/Address'
import addresses from './address-list';
import './index.css';
import 'whatwg-fetch';


fetch('./addresses.json').then(function(data) {
    const addresses = data.json();
    console.log(addresses);
    return addresses;

}).then(function (data) {
    console.log(JSON.stringify(data, null, 4));
    that.addresses = data;
    that.setLocalStorage();
}).catch(function (err) {
    logger.log(err);
})
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
        /*const open = (i === 0) ? '[\n\t{' : '\t{';
        console.log(open);

        writeIt('"firstName":', json.objects[i].person.firstname);
goes into the for loop
// AND SO ON
*/
        const close = i < jsonLength - 1 ? '\t},' : '\t}\n]';
        console.log(close);
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



