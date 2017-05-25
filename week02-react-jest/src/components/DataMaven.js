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



     /*it('renders and displays a Router', () => {
     const wrapper = shallow(<DataMaven  />);
     elfDebug.getAll(wrapper);
     var router = wrapper.find('Router');
     expect(router.length).toEqual(1);
 });*/



     render() {
        return (


                <Router>
                    <div>
                    <ElfHeader/>
                    <ElfMenu/>
                    <div>
                        <Route exact path ='/' render ={(props(
                            <Address {props}
                               onAddressChange={this.onAddressChange}
                               onNameChange={this.onNameChange}

                        <Route exact path='/' component={Address}/>
                        <Route path='/edit' component={AddressChanger}/>
                        <Route path='/small' component={SmallNumbers}/></div></div>DIV>
                </Router></div>



        );
    }
 }





 export default DataMaven;