/**
 * Created by charlie on 5/17/17.
 */

import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import ElfHeader from './ElfHeader';
import ElfMenu from './ElfMenu';
import AddressShow from './AddressShow';
import About from './About';
import DataLoader from '../assets/DataLoader';
const dataLoader = new DataLoader();
import Logger from '../assets/ElfLogger';
const logger = new Logger('data-maven', 'yellow', 'green', '16px');
import { getByIndex } from '../assets/elf-local-storage';

class DataMaven extends Component {

    constructor(props) {
        super(props);
        logger.log('Constructor called');

        this.addressIndex = 0;

        var unknown = 'loading';
        this.state = {
            address: {
                'firstName': unknown,
                'lastName': unknown,
                'street': unknown,
                'city': unknown,
                'state': unknown,
                'zip': unknown,
                'phone': unknown,
                'website': unknown,
                'email': unknown,
                'contact': unknown
            }
        };
        this.onAddressChange = this.onAddressChange.bind(this);
    }

    componentDidMount() {
        logger.log('DID MOUNT');
        const that = this;
        dataLoader.loadAddresses(function(addressCount) {
            if (!addressCount) {
                throw new Error('Cannot get address count in address.js');
            }
            that.addressCount = addressCount;
            logger.log('LOADED ADDRESS');
            const address = getByIndex(that.addressIndex);
            that.setState({
                address: address
            });
        });
    }

    onAddressChange(event) {
        logger.log('onAddressChange called with index:', this.addressIndex);
        if (this.addressIndex < this.addressCount - 1) {
            this.addressIndex += 1;
            const address = getByIndex(this.addressIndex);
            this.setState({
                address: address
            });
        }
    };

    render() {
        return (

                <div className='container'>
                    <ElfMenu />
                    <ElfHeader />
                    <Route exact path='/' render={(props) => (
                        <AddressShow {...props}
                                 address={this.state.address}
                                 onAddressChange={this.onAddressChange}
                        />
                    )}/>
                    <Route path='/about' component={About}/>
                </div>
        );
    }
}

export default DataMaven;

