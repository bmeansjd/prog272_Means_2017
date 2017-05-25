/**
 * Created by bcuser on 4/17/17.
 */
import React from 'react';
//import Address from 'react';
import ElfHeader from './components/ElfHeader';
import ElfMenu from './components/ElfMenu';
//import React ,{Component}from 'react';
import addresses from '../address-list';
import AddressEdit from './AddressEdit';
import AddressShow from './AddressShow';
import Address from './Address';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <div>
        <ElfHeader />
        <ElfMenu/>
    </div>,
    document.getElementById('root')
);


class AddressChanger extends Address {

    //lots of stuff to go here



    getAddress = () => {
        this.setState({
            address: address
        })
    };

    render(){
        if (!this.quiet) { console.log("ADDRESS RENDER"); }
        return (
            <div className="App">
                <Address />
            </div>
        );
    }
}
export default Address