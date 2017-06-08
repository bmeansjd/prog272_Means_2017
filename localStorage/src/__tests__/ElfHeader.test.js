import React from 'react';
import ReactDOM from 'react-dom';
import ElfHeader from '../components/ElfHeader';
import {shallow} from 'enzyme';

describe('ElfHeader Suite', function() {

    it('renders ElfHeader component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ElfHeader />, div);
    });

    it('renders and reads H2 text', () => {
        const wrapper = shallow(<ElfHeader />);
        const welcome = <h2>Welcome to Prog272</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

});

