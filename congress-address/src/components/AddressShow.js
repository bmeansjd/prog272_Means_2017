
import React, {Component} from 'react';
import '../css/App.css';
import './Address';

class AddressShow extends Component {
    constructor(props) {
        super(props);
        this.quiet = true;
        this.log('CONSTRUCTOR', this.props.address);
        /*console.log('TEST PROPS' , props);
         if (!this.props.address)
         {
         throw new Error('No props in Addresses');
         }

         this.log(props); */

    }// end constructor

    log(message, message2 = '', message3 = '') {

        if (!this.quiet) {
            const label = this.constructor.name + ': ';
            console.log(label, message, message2, message3);
        }
    }// end log

    render() {
        this.log('SHOW ADDRESS RENDER');
        return (
            <div id='addressShowRender' className='App'>

                <p className='App-intro'>
                    First Name: {this.props.address.firstName}
                </p>
                <p className='App-intro'>
                    Last Name: {this.props.address.lastName}
                </p>

                <p className='App-intro'>
                    Street Address: {this.props.address.street}
                </p>
                <p className='App-intro'>
                    City & District: {this.props.address.city}
                </p>
                <p className='App-intro'>
                    State Represented: {this.props.address.state}
                </p>
                <p className='App-intro'>
                    Zip Code: {this.props.address.zip}
                </p>
                <p className='App-intro'>
                    Phone Number: {this.props.address.phone}
                </p>

                <p className='App-intro'>
                    Web Address: {this.props.address.web}
                </p>
                <button id='firstShowAddress' onClick={this.props.onFirstAddress} className='firstAdr'>First Address</button>
                <button id='prevShowAddress' onClick={this.props.addressButtonClick} className='prevAdr'>Previous Address</button>
                <button id='nextShowAddress' onClick={this.props.addressButtonClick} className='nextAdr'>Next Address</button>
                <button id='lastShowAddress'onClick={this.props.onLastAddress} className='lastAdr'>Last Address</button>
                <br/>
                <br/>
            </div>
        ); // end return

    }// end render

}// end class AddressShow

export default AddressShow;
