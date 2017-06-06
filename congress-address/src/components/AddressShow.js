import React,{Component}from 'react';
//import ReactDOM from 'react-dom';
//import App from './App';
//import addresses from '../address-list';
import {Button} from 'react-bootstrap';
import '../css/index.css';
//import '../App.css';


class AddressShow extends Component {


    constructor(props) {
        super(props);
        this.quiet=true;
        this.log('CONSTRUCTOR', this.props.address);
    }

    log(message, message2='', message3 =''){
        if(!this.quiet) {
         const label = this.constructor.name + ':';
          console.log(label, message, message2, message3);
        }

    }

    render() {
        this.log("RENDER");

        return (
            <form className='navbar-form' action=''>
              <div id='addressShowRender' className='row'>
               <div className ="col-sm-12">
                <p className='elf-p'>
                    firstName: {this.props.address.firstName}
                </p>
                   <p className='elf-p'>
                   lastName: {this.props.address.lastName}
                   </p>
                   <p className='elf-p'>
                       street: {this.props.address.street}
                   </p>
                   <p className='elf-p'>
                       city: {this.props.address.city}
                   </p>
                   <p className='elf-p'>
                       state: {this.props.address.state}
                   </p>
                   <p className='elf-p'>
                       zip: {this.props.address.zip}
                   </p>
                   <p className='elf-p'>
                       phone: {this.props.address.phone}
                   </p>
                   <p className='elf-p'>
                       website: {this.props.address.website}
                   </p>
                   <Button bsStyle = 'primary' id='decrementAddressClick' onClick ={this.props.onAddressChange}/>
                   <Button bsStyle = 'success' id='incrementAddressClick' onClick={this.props.onAddressChange}/>

                  </div>
                   </div>


                          /* {/*
                <AddressEdit
                    address={this.state.address}
                    onAddressChange={this.onAddressChange}
                    onNameChange={this.onNameChange}
                />
                <AddressShow
                    address={this.state.address}
                    onAddressChange={this.onAddressChange}/>}
                />*/

            </form>
        );
    }
}

export default AddressShow;