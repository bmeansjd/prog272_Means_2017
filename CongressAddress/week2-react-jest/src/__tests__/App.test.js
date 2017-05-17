import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App';
import { shallow } from 'enzyme';
import Header from '../src/components/Header';

const getLast = (wrapper) => {
    const ninep = wrapper.find('p').last().debug();
    console.log(ninep);
};

const getFirst = (wrapper) => {
    const ninep = wrapper.find('p').first().debug();
    console.log(ninep);
};

describe('React Jest Suite', function () {

    it('renders and reads H1 text', () => {
        const wrapper = shallow(<Header />);
        const welcome = <h2>Welcome to React</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders without our App component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('renders and reads H1 text', () => {
        const wrapper = shallow(<App />);
        const welcome = <h2>Welcome to Prog272</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the word Nine', () => {
        const wrapper = shallow(<App />);
        console.log(wrapper);
        const welcome = <p className="App-intro">Nine: 0</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click message', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">Nine: 9</p>;
        wrapper.find('button.elf').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });
    it('renders and displays the default first name', () => {
        const wrapper = shallow(<App />);
        const welcome = <p className="App-intro">firstName: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

});