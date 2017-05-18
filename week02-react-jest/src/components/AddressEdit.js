import React from 'react';
import Address from '../components/Address';
import { mount } from 'enzyme';

import addresses from './../Address-List';
import '../css/index.css';
 import { shallow } from 'enzyme';
const address = addresses[0];

describe('Address mount Suite', function () {



  constructor(props) {
      super(props);/*  var quiet = true;*/
/*    this.quiet = false;
*/    this.log('CONSTRUCTOR', this.props.address);
  };




  onAddressChange = (event) => {
      this.addressIndex = 1;
      const address = addresses[this.addressIndex];
  
      this.setState({
          address: address
      })
  };



    <AddressShow
        address={this.state.address}
        onAddressChange={this.onAddressChange}
    />

});
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

