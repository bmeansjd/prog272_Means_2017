// TODO: This file was empty. I've moved the code testing Header.js from Address.test.js (was App.test.js) to this file.
import React from 'react';
// TODO: The path to Header needed to be tweaked. Don't include src.
import Header from '../components/Header';
import { shallow } from 'enzyme';

describe('React Jest Suite', function () {

    // TODO: Move getLast and getFirst inside call to describe
    const getLast = (wrapper) => {
        const ninep = wrapper.find('p').last().debug();
        console.log(ninep);
    };

    const getFirst = (wrapper) => {
        const ninep = wrapper.find('p').first().debug();
        console.log(ninep);
    };

    fit('renders and reads H2 text', () => {
        const wrapper = shallow(<Header />);
        // TODO: Match the string that is actually in your header.
        const welcome = <h2>Welcome to Prog272</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

});