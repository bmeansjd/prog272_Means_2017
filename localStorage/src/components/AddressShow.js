/**
 * Created by charlie on 4/24/17.
 */

import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import '../css/App.css';

class AddressShow extends Component {

    render() {

        return (
            <div id='addressShowRender' className='row'>
                <div id='addressShowRow' className='col-sm-12'>
                    <p className='elf-p'>
                        firstName: {this.props.address.firstName}
                    </p>

                    <p className='elf-p'>
                        lastName: {this.props.address.lastName}
                    </p>

                    <p className='elf-p'>
                        phone: {this.props.address.phone}
                    </p>

                    <p className='elf-p'>
                        website: {this.props.address.website}
                    </p>

                    <Button
                        bsStyle='success'
                        id='incrementAddressClick'
                        onClick={this.props.onAddressChange}>Next Address
                    </Button>
                </div>
            </div>

        );
    }
}

export default AddressShow;
