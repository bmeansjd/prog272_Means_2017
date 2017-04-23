import React, {Component} from 'react';
import '../App.css';

// TODO: There were several problems with curley brace matching and indentation
class App extends Component {
    constructor() {
        super();

        this.state = {
            nine: '0',

        };
    }

    // TODO: This should be getNine, not bar, because of button click below
    getNine = () => {
        this.setState({
            nine: '9',

        })
    };

    // TODO: Missing white space
    // TODO: Malformed P tag
    // TODO: className-"elf" to className="elf"
    render() {
        return (
            <div className="App">

                <p className='App-intro'>
                    Nine: {this.state.nine}
                </p>
                <button className="elf" onClick={this.getNine}>Get Nine</button>
            </div>
        )
    };
}

export default App;
