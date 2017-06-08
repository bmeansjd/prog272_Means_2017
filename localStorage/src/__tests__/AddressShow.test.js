import React from 'react';
import AddressShow from '../components/AddressShow';
import { shallow } from 'enzyme';
import { getByIndex } from '../assets/elf-local-storage';
import ElfDebugEnzyme from '../assets/ElfDebugEnzyme';
const elfDebug = new ElfDebugEnzyme(false, 'AddressShow.test.js');
import DataLoader from '../assets/DataLoader';
const dataLoader = new DataLoader();

describe('AddressShow Shallow Suite', function() {

    let address;

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

    beforeEach(function(done) {
        dataLoader.loadAddresses(function(addressCount) {
            if (!addressCount) {
                throw new Error('Cannot get address count in address.js');
            }
            address = getByIndex(0);
            done();
        });
    });

    const defaultFieldTest = (name, index, talkToMe) => {
        const wrapper = shallow(<AddressShow address={address}  />);
        const welcome = <p className="elf-p">{name}</p>;
        elfDebug.getIndex(wrapper, 'div#addressShowRow', index, talkToMe);
        expect(wrapper.contains(welcome)).toEqual(true);
    };

    it('renders and displays the default first name', () => {
        defaultFieldTest('firstName: Lamar', 0);
    });

    it('renders and displays the default last name', () => {
        defaultFieldTest('lastName: Alexander', 1);
    });

    it('renders and displays the default phone', () => {
        defaultFieldTest('phone: 202-224-4944', 2);
    });

});

