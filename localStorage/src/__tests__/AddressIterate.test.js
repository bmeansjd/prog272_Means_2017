import React from 'react';
import {mount} from 'enzyme';
import {BrowserRouter as Router} from 'react-router-dom';
jest.mock('whatwg-fetch');
import DataMaven from '../components/DataMaven';
import ElfDebugEnzyme from '../assets/ElfDebugEnzyme';
const elfDebug = new ElfDebugEnzyme(false, 'Address.test.js');

describe('Address Iterate Suite', function() {

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

    const afterClickFieldTest = (name, index, talkToMe) => {
        const wrapper = mount(<Router><DataMaven /></Router>);
        const patty = <p className='elf-p'>{name}</p>;
        wrapper.find('button#incrementAddressClick').simulate('click');
        elfDebug.getIndex(wrapper, 'div#addressShowRow', index, talkToMe);
        expect(wrapper.contains(patty)).toEqual(true);
    };

    it('renders button click message first name', () => {
        afterClickFieldTest('firstName: Roger', 0);
    });

    it('renders button click message last name', () => {
        afterClickFieldTest('lastName: Wicker', 1, false);
    });

    it('renders button click message website', () => {
        afterClickFieldTest('website: https://www.wicker.senate.gov', 7);
    });

});
