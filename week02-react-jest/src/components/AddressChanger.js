/**
 * Created by bcuser on 4/17/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Address from './Address';
import AddressEdit from './AddressEdit';
import ElfHeader from './ElfHeader';
import ElfMenu from './ElfMenu';

class AddressChanger extends Address {

    constructor(props) {
        super(props);
        this.state = {
            address: {}
        }
    }

    getAddress = () => {
        this.setState({
            address: {}
        });
    };

    render() {

        if (!this.quiet) {
            console.log("ADDRESS RENDER");
        }
        return (

            <div className="App">
                <AddressEdit
                    address={this.state.address}
                    onAddressChange={this.onAddressChange}
                    onNameChange={this.onNameChange}
                />

            </div>
        );
    };
}
export default Address




