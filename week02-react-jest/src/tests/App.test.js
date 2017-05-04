import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import {shallow} from 'enzyme'
import addresses from './address-list'




describe('jReact Jest Suite', function() {

    it('renders without out App component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('renders and reads H1 text', () => {
        const wrapper = shallow(<Address address ={addresses[0]}/>);
        const welcome = <h2>Welcome to Prog 272</h2>;
        getFirst(wrapper);
        expect(wrapper.contains(welcome)).toEqual(true);
    });
//see pictures to finih this

   it ('renders button click message', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">Nine: 9</p>;
        wrapper.find('button.elf').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });



});
