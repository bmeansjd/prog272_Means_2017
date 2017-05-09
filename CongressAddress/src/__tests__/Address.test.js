/**
 * Created by bcuser on 5/7/17.
 */
/**
 * Created by bcuser on 4/17/17.
 */




///REDO FOR THE TEST






import React, {Component} from 'react';
import '../components/App.css';

class Address extends Component {

    constructor(props) {
        super(props);


        console.log('TEST PROPS', props);

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


/*
it('expects true to be true', function() {
    expect(true).toBe(true);
})*!/
*/
