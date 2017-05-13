import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();//calling the parent class constructor

        this.state = {
            nine: '0',
            firstName: 'Brenda',
            lastName:''
        };

        bar = () => {


            this.setState({
                nine: '9',
                firstName: 'Brenda',
                lastName: 'Means'
            })

        };
        render();
        {

        }
        return (
            <div className="App">

                <p className="App-intro">
                    Nine:{this.state.nine}
                </p>

                <button className="elf" onClick={this.getNine}>Get Nine</button>

            </div>
        );
    }
}

export default App;