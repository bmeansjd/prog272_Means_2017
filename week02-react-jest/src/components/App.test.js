import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '/components/App';
import {shallow} from 'enzyme'
import {App} from './App';
describe('jReact Jest Suite', function() {


    it.only('renders without out App component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });



    it('renders and reads H2 text', () => {
        const wrapper = shallow(<Elfheader/>);
        const welcome = <h2>Welcome to Prog 272</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the word nine', () => {
        const wrapper = shallow(<App />);
        const welcome = <p className="App-intro">Nine: 0 </p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default value for  Nine', () => {
        const wrapper = shallow(<Adress/>);
        //console.log(wrapper);
        const welcome = <p className="App">Nine: 0</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default value for firstName', () => {
        const wrapper = shallow(<Adress />);
        const nineSign = <p className="App-intro">firstName: unknown</p>;
        wrapper.find('button.elf').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });


    it('renders and displays the default value for Carly', () => {
        const wrapper = shallow(<Adress />);
        const nineSign = <p className="App-intro">firstName: Carly</p>;
        wrapper.find('button.getAddress').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

});