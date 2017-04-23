/**
 * Created by bcuser on 4/17/17.
 */
import React, {Component} from 'react';
//import logo from './logo.svg';
// TODO: Cleaned up this import
import '../App.css';

class Address extends Component {

    constructor(props) {
        super(props);

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
}

export default Address




