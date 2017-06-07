//created may and corrected 6/6/17
import React from 'react';
import Address from '../components/Address';
import {mount} from 'enzyme';
import addresses from '../address-list';
import '../css/index.css';
//import ElfTestDebug from '../ElfTestDebug';
jest.mock('whatwg-fetch');

describe('React Address Test Suite', function() {

    let quiet = false;
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

    /*
     * @param {object} wrapper - Container for a bunch of HTML nodes
     * @param {number} index - Index of HTML element.
     * @param {boolean} talkToMe - Speak even if quiet is true
     */
    const getIndex = function(wrapper, index, talkToMe) {
        if (!quiet || talkToMe) {
            const ninep = wrapper.find('div#addressShowRender').childAt(index).debug();
            console.log('NINEP:', ninep);
        }
    };

    const defaultFieldTest = (name, index, talkToMe) => {
        const wrapper = mount(<Address address={address}/>);
        const welcome = <p className='App-intro'>{name}</p>;
        ElfTestDebug.getIndex();
        // getIndex(wrapper, index, talkToMe);
        expect(wrapper.contains(welcome)).toEqual(true);
    };

    const afterClickFieldTest = (name, index, talkToMe) => {
        const wrapper = mount(<Address address={address}/>);
        const theName = <p className='App-intro'>{name}</p>;
        wrapper.find('button#setAddress').simulate('click');
        //getIndex(wrapper, index, talkToMe);
        expect(wrapper.contains(theName)).toEqual(true);
    };

    it('renders and displays the word First Name', () => {

        // passes in addresses object

        const wrapper = mount(<Address addressList={addresses}/>);


        // sets what rendered element should look like
        const fName = <p className='App-intro'>First Name: Lamar</p>;

        // defaultFieldTest()

        // compares rendered element to expected value. Pass if true, otherwise fail
        expect(wrapper.contains(fName)).toEqual(true);

    });
    it('renders and displays Last Name of Alexander', () => {
        const wrapper = mount(<Address addressList={addresses}/>);
        const lName = <p className='App-intro'>Last Name: Alexander</p>;
        expect(wrapper.contains(lName)).toEqual(true);
    });

    it('renders and displays Street Address of Unknown', () => {
        const wrapper = mount(<Address addressList={addresses}/>);
        const lName = <p className='App-intro'>Street Address: 455 Dirksen Senate Office Building </p>;
        expect(wrapper.contains(lName)).toEqual(true);
    });

    it('renders and displays City of Unknown', () => {
        const wrapper = mount(<Address addressList={addresses}/>);
        const city = <p className='App-intro'>City: Washington DC</p>;
        expect(wrapper.contains(city)).toEqual(true);
    });

    it('renders and displays State of Unknown', () => {
        const wrapper = mount(<Address addressList={addresses}/>);
        const usState = <p className='App-intro'>State: TN</p>;
        expect(wrapper.contains(usState)).toEqual(true);
    });

    it('renders and displays Zip Code of Unknown', () => {
        const wrapper = mount(<Address addressList={addresses}/>);
        const zip = <p className='App-intro'>Zip Code: 20510</p>;
        expect(wrapper.contains(zip)).toEqual(true);
    });

    it('renders and displays Phone Number of Unknown', () => {
        const wrapper = mount(<Address addressList={addresses}/>);
        const phone = <p className='App-intro'>Phone Number: 202-224-4944</p>;
        expect(wrapper.contains(phone)).toEqual(true);
    });

    it('renders and displays Web Address of Unknown', () => {
        const wrapper = mount(<Address addressList={addresses}/>);
        const web = <p className='App-intro'>Web Address: https://www.alexander.senate.gov/public</p>;
        expect(wrapper.contains(web)).toEqual(true);
    });

    it('renders and displays First Address Button', () => {
        const wrapper = mount(<Address addressList={addresses} />);
        const firstBtn = <button id='firstShowAddress' className='firstAdr'>First Address</button>;
        expect(wrapper.containsMatchingElement(firstBtn)).toEqual(true);
    });

    //=================================================================================================

    // button rendering tests

    //NextAddress Button render test for checking 2nd address
    it('renders button click message to show First name of Suzan', () => {
        const wrapper = mount(<Address addressList={addresses}/>);
        const fName = <p className='App-intro'>First Name: Suzan</p>;
        wrapper.find('button#nextShowAddress').simulate('click');
        // getIndex(wrapper,1);
        expect(wrapper.contains(fName)).toEqual(true);
    });

    it('renders button click message to show Last name of DelBene', () => {
        const wrapper = mount(<Address addressList={addresses}/>);
        const lName = <p className='App-intro'>Last Name: DelBene</p>;
        wrapper.find('button#nextShowAddress').simulate('click');
        expect(wrapper.contains(lName)).toEqual(true);
    });

    it('renders button click message to show Street Address of 22121 17th Ave SE #220', () => {
        const wrapper = mount(<Address addressList={addresses}/>);
        const streetAdr = <p className='App-intro'>Street Address: 22121 17th Ave SE #220</p>;
        wrapper.find('button#nextShowAddress').simulate('click');
        expect(wrapper.contains(streetAdr)).toEqual(true);
    });

    it('renders button click message to show City of Bothell', () => {
        const wrapper = mount(<Address addressList={addresses}/>);
        const city = <p className='App-intro'>City: Bothell</p>;
        wrapper.find('button#nextShowAddress').simulate('click');
        expect(wrapper.contains(city)).toEqual(true);
    });

    it('renders button click message to show State of Washington', () => {
        const wrapper = mount(<Address addressList={addresses}/>);
        const usState = <p className='App-intro'>State: WA</p>;
        wrapper.find('button#nextShowAddress').simulate('click');
        expect(wrapper.contains(usState)).toEqual(true);
    });

    it('renders button click message to show Zip Code of 98021', () => {
        const wrapper = mount(<Address addressList={addresses}/>);
        const zip = <p className='App-intro'>Zip Code: 98021</p>;
        wrapper.find('button#nextShowAddress').simulate('click');
        expect(wrapper.contains(zip)).toEqual(true);
    });

    it('renders button click message to show Phone Number of (425)485-0085', () => {
        const wrapper = mount(<Address addressList={addresses}/>);
        const phone = <p className='App-intro'>Phone Number: (425)485-0085</p>;
        wrapper.find('button#nextShowAddress').simulate('click');
        expect(wrapper.contains(phone)).toEqual(true);
    });

    it('renders button click message to show web address of https://delbene.house.gov/', () => {
        const wrapper = mount(<Address addressList={addresses}/>);
        const phone = <p className='App-intro'>Web Address: https://delbene.house.gov/</p>;
        wrapper.find('button#nextShowAddress').simulate('click');
        expect(wrapper.contains(phone)).toEqual(true);
    });

});// end describe
