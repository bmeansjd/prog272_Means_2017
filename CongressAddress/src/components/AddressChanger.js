/**
 * Created by bcuser on 5/8/17.
 */

import React, {Component} from 'react';

import 'css/App.css';

class Address extends Component {



    render() {
        if (!this.quiet){   console.log("address render");
    }
    return(
        <div className="App">
       <AddressEdit
        address={this.state.address}
        onAddressChange{this.onAddressChanger}
        OnNameChange{this.onNameChange}/>
               />
    </div>

     );
    }
}

export default AddressChanger;

