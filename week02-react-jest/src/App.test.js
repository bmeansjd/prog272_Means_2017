/**
 * Created by bcuser on 5/8/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('jest test', function() {


    class App extends Component {
        constructor() {
            super();
            this.state = {
                nine: '0'
            }
        }

    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('renders and reads H1 text', () => {
        const wrapper = shallow(<App />);
        const welcome = <h2>Welcome to React</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click message and show nine', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">Nine: 9</p>;
        wrapper.find('button.elf').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
   });

     it('renders and displays the default value for firstName',() =>{
     const wrapper = shallow(<Address address = {addresses}/>);
     getFirst (wrapper, 'p');
         const welcome =<p className = App-intro>firstName:unknown</p>;
             expect(wrapper.contains(welcome)).toEqual(true);
     
     });

    it('renders button click message', () => {
        const wrapper = shallow(<App />);
        const nineSign = <button className='elf' onClick={this.getNine}>Get Nine</button>;
        wrapper.find('button.elf').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

        fit.only('renders button click message', () => {
            const wrapper = shallow(<App />);

            });

        it.only('renders button click message and show Carly', () => {
            const wrapper = shallow(<App />);
                 const wrapper = shallow(<Address address>);
        });

};
