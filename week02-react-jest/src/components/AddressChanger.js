/**
 * Created by bcuser on 4/17/17.
 */
import React from 'react';
import Addres from 'react';
import ElfHeader from './components/ElfHeader';
import ElfMenu from './components/ElfMenu';


ReactDOM.render(
    <div>
        <ElfHeader />
        <ElfMenu/>
    </div>,
    document.getElementById('root')
);


class AddressChanger extends Address {

   //lots of stuff to go here


    };

getAddress = () => {
    this.setState({
        address: address
    })
};

    render(){
        return
        if (!this.quiet) { console.log("ADDRESS RENDER"); }
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




