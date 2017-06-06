import AddressEdit from './AddressEdit';
import SmallNumbers from './SmallNumbers';
import ElfHeader from './ElfHeader';
import ElfMenu from './ElfMenu';
import Address from './Address';
import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


class DataMaven extends Component {



address.zip = 'Oh No Bad Case';

}
this.setState({
    address:address
});

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

fetchAddress = () => {
    const that = this;

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

};


 render(){
    return (

       //<Router>
           <div className="container">
             <ElfHeader/>
              <ElfMenu/>

          <Route exact path='/' render={(props)=>(
             <Address {...props}
                onAddressChange={this.onAddressChange}
                 address{this.state.address}
                 />
          )}/>
               <Route path = '/edit' render={(props)=>(
               <AddressEdit{...props}
                   address={this.state.address}
                           onAddressChange{this.onAddressChange}
                   onNameChange={this.onNameChange()}
                           />
               )}/>
                        /* <Route exact path='/' component={Address}/>
                            <Route path='/edit' component={AddressChanger}/>*/
                <Route path='/small' component={SmallNumbers}/>
              </div>
            //</Router>
              );

     });
 }
  export default DataMaven;
/**
 * Created by bcuser on 5/30/17.
 */
