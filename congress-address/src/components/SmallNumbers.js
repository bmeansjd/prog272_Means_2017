/**
 * Created by bcuser on 5/22/17.
 */
import React, {Component} from 'react';
import '../css/App.css';


class App extends Component {
    constructor() {
        super();

        this.state = {
            nine: '0',

        };
    }


    getNine = () => {
        this.setState({
            nine: '9',

        })
    };

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