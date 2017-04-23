import React from 'react';
import ReactDOM from 'react-dom';
// TODO: Fixed missing DOT and components folder
// TODO YOU WROTE import {App} from .... It should be import App
import App from './components/App';
import ElfHeader from './components/Elfheader';
import {shallow} from 'enzyme'

describe('Numbers Jest Suite', function() {

    var quiet = false;

    function getFirst(wrapper, element) {
        const eightp = wrapper.find(element).first().debug();
        if (!quiet) {
            console.log("USER LOGIN:", eightp);
        }
    }

    it('renders without out App component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });


    it('renders and reads H2 text', () => {
        // TODO: Wrote Elfheader instead of ElfHeader
        const wrapper = shallow(<ElfHeader/>);
        // TODO: Whitespace was not correct here and in ElfHeader
        const welcome = <h2>Welcome to Prog272</h2>;
        getFirst(wrapper, 'h2');
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the word nine', () => {
        const wrapper = shallow(<App />);
        const welcome = <p className="App-intro">Nine: 0</p>;
        getFirst(wrapper, 'p');
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default value for  Nine', () => {
        const wrapper = shallow(<App/>);
        //console.log(wrapper);
        const welcome = <p className="App-intro">Nine: 0</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

});