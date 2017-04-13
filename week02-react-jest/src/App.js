import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();//calling the parent class constructor

        this.state = {
            nine: '0',
            firstName: 'Brenda',
            lastName:'Means'
        };

        bar = () => {


            this.setState({nine: '9'})

        };
        render();
        {

        }
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to Prog 272</h2>
                </div>
                <p className="App-intro">
                    Nine:{this.state.nine}
                </p>
                <p className="App-intro">
                    firstName:{this.state.firstName}
                </p>
                <button onClick={this.bar}>Get Nine</button>

            </div>
        );
    }
}

export default App;
