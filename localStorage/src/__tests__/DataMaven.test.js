/**
 * Created by charlie on 5/17/17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import DataMaven from '../components/DataMaven';
import {BrowserRouter as Router} from 'react-router-dom';
import {shallow} from 'enzyme';
import ElfDebugEnzyme from '../assets/ElfDebugEnzyme';
const elfDebug = new ElfDebugEnzyme(false, 'DataMaven.test.js');


describe('DataMaven Suite', function() {

    beforeEach(function() {
        const localStorageMock = (function() {
            let storage = {};
            return {
                getItem: function(key) {
                    return storage[key];
                },
                setItem: function(key, value) {
                    storage[key] = value.toString();
                },
                clear: function() {
                    storage = {};
                }
            };
        })();
        Object.defineProperty(global, 'localStorage', {value: localStorageMock});
    });

    it('renders DataMaven component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router><DataMaven /></Router>, div);
    });

    it('renders and displays a BrowserRouter', () => {
        const wrapper = shallow(<Router><DataMaven /></Router>);
        elfDebug.getAll(wrapper, false);
        var router = wrapper.find('Router');
        expect(router.length).toEqual(1);
    });

    it('renders and displays at least one Route', () => {
        const wrapper = shallow(<DataMaven  />);
        elfDebug.getAll(wrapper, false);
        var router = wrapper.find('Route');
        expect(router.length).toBeGreaterThan(0);
    });

    it('renders and displays the ElfHeader', () => {
        const wrapper = shallow(<DataMaven  />);
        elfDebug.getAll(wrapper, false);
        var router = wrapper.find('ElfHeader');
        expect(router.length).toEqual(1);
    });

    it('renders and displays the ElfMenu', () => {
        const wrapper = shallow(<DataMaven  />);
        elfDebug.getAll(wrapper, false);
        var router = wrapper.find('ElfMenu');
        expect(router.length).toEqual(1);
    });
});
