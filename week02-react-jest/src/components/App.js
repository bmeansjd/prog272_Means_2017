import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// TODO: There were several problems with curley brace matching and indentation
class App extends Component {
    constructor() {
        super();//calling the parent class constructor

        this.state = {
            nine: '0',
            firstName: 'Brenda',
            lastName:''
        };
    }

<<<<<<< HEAD
    // TODO: This should be getNine, not bar, because of button click below
    getNine = () => {
        this.setState({
            nine: '9',

        })
    };
=======
        bar = () => {


            this.setState({
                nine: '9',
                firstName: 'Brenda',
                lastName: 'Means'
            })
>>>>>>> master

    // TODO: Missing white space
    // TODO: Malformed P tag
    // TODO: className-"elf" to className="elf"
    render() {
        return (
            <div className="App">
<<<<<<< HEAD
=======

                <p className="App-intro">
                    Nine:{this.state.nine}
                </p>

                <button className="elf" onClick={this.getNine}>Get Nine</button>
>>>>>>> master

                <p className='App-intro'>
                    Nine: {this.state.nine}
                </p>
                <button className="elf" onClick={this.getNine}>Get Nine</button>
            </div>
<<<<<<< HEAD
        )
    };
=======
        );
    }
>>>>>>> master
}

export default App;