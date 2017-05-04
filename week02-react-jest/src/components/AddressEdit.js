import React from 'react';
import Address from '../components/Address';
import { mount } from 'enzyme';

import addresses from './../Address-List';
import '../css/index.css';
 import { shallow } from 'enzyme';
const address = addresses[0];

describe('Address mount Suite', function () {


}
  constructor(props) {
      super(props);/*  var quiet = true;*/
/*    this.quiet = false;
*/    this.log('CONSTRUCTOR', this.props.address);
  }
  /*  /!**/
  log(message, message2 = '', message3 = '') {/*   * @param {object} wrapper - Container for a bunch of HTML nodes*/
  /*   * @param {number} index - Index of HTML element.*/
      if (!this.quiet) {/*   * @param {boolean} talkToMe - Speak even if quiet is true*/
          const label = this.constructor.name + ': ';   < === HERE/*   *!/*/
          console.log(label, message, message2, message3);/*  const getIndex = function(wrapper, index, talkToMe) {*/
      }/*      if (!quiet || talkToMe) {*/
  }/*          const ninep = wrapper.find('div#addressShowRender').childAt(*/index).debug();
  /*          console.log('NINEP:', ninep);*/
  render() {/*      }*/
      this.log("RENDER"); }
}


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
}