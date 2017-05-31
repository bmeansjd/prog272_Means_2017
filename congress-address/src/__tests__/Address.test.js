import React from 'react';
import ReactDOM from 'react-dom';
// TODO: App is now called Address. I've done a search and replace throughout this document
import Address from '../components/Address';
import { shallow } from 'enzyme';
// TODO: You need addresses so you can pass props to Address
import addresses from '../address-list';
jest.mock('whatwg-fetch');


describe('React Jest Suite', function () {

    // TODO: Move getLast and getFirst inside call to describe
    const getLast = (wrapper) => {
        const ninep = wrapper.find('p').last().debug();
        console.log(ninep);
    };

    const getFirst = (wrapper) => {
        //const ninep = wrapper.debug();
        const ninep = wrapper.find('p').first().debug();
        console.log(ninep);
    };

    it('renders our Address component without crashing', () => {
        const div = document.createElement('div');
        // TODO: Pass props to address constructor
        ReactDOM.render(<Address addressList={addresses} />, div);
    });

    it('renders and displays the word Nine', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        //console.log(wrapper);
        // TODO: Get the string you are trying to match right.
        const welcome = <p className="App-intro">firstName: unknown</p>;
        // TODO: Set out enzyme debug so you can see what you are trying to match
        getFirst(wrapper);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click message', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        // TODO: Search for proper string
        const nineSign = <p className="App-intro">firstName: Patty</p>;
        // TODO: Get the proper ID or CLASS of the button
        wrapper.find('button#setAddress').simulate('click');
        // TODO: Send out enzyme debug so you know your goal
        getFirst(wrapper);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders and displays the default first name', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const welcome = <p className="App-intro">firstName: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

});