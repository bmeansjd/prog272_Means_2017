import ReactDOM from 'react-dom';
import React from 'react ';
import DataMaven from '../components/DataMaven'
import {shallow} from 'enzyme';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebug = new ElfDebugEnzyme(true, 'DataMaven.test.js');


describe('DataMaven Suite', function() {

// http://stackoverflow.com/a/32911774/253576
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
        ReactDOM.render(<DataMaven />, div);
    });

    it('renders and displays a Router', () => {
        const wrapper = shallow(<DataMaven  />);
        elfDebug.getAll(wrapper);
        var router = wrapper.find('BrowserRouter');
        console.log(router);
        expect(router.length).toEqual(1);
    });



});



