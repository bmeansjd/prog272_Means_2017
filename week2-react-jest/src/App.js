import React, {Component} from 'react';
import '../App.css';


class App extends Component {
    constructor() {
        super();

        this.state = {
            nine: '0',
            firstName: 'unknown'

        };
    }


    getNine = () => {
        this.setState({
            nine: '9'
        })
    };

    setAddress = () => {
        this.setState({
            firstName: 'Brenda',
            lastName: 'Means'
        })
    };

    render() {
        return (
            <div className="App">

                <p className="App-intro">
                    firstName: {this.state.firstName}

                </p>
                <button className="setAddress" onClick={this.setAddress}>Set Address</button>
            </div>
        )
    };
}

export default App;
