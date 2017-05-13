/*
 * Created by bcuser on 5/7/17.
 */
import React, {Component} from 'react';
<<<<<<< HEAD:week02-react-jest/src/components/Address.js
//import logo from './logo.svg';
// TODO: Cleaned up this import
import '../App.css';
=======

import 'css/App.css';
>>>>>>> master:week02-react-jest/src/Address.js

class Address extends Component {

    constructor(props) {
        super(props);
        console.log('TEST PROPS', props);

<<<<<<< HEAD:week02-react-jest/src/components/Address.js
        // TODO It is console.log, not console.logs
        console.log('TEST PROPS', props);
        // TODO: Missing period after this.props:
        if (!this.props.address) {
            //TODO: throw new error and instead of string
            throw new Error("ELF: no props in Address. You mut pass n props");
        }
        //console.log( )
        this.state = {
            aFirstName: this.props.address.firstName,
=======
        if (!this.props.address) {

            throw new Error("No props in Address. You mut pass n props");
        }
        console.log( )
        const index = 0
        this.state = {
            firstName: this.props.address.firstName,
>>>>>>> master:week02-react-jest/src/Address.js
            lastName: this.props.address.lastName
        }
    }

    getAddress = () => {
        this.setState({
            firstName: 'Brenda',
            lastName: 'Means'


        })
    };

    render() {
        return <div className="App">

            <p className="App-intro">
                firstName:{this.state.firstName}
            </p>
            <button className="getAddress" onClick={this.getAddress}>"Get Address"</button>
        </div>
    };
<<<<<<< HEAD:week02-react-jest/src/components/Address.js
}

export default Address

=======
>>>>>>> master:week02-react-jest/src/Address.js

}

export default Address

