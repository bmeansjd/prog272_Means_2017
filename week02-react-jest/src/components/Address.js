/**
 * Created by bcuser on 4/17/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Address from './components/Address'
import addresses from './address-list';
import './index.css';

ReactDOM.render(
    <div>
        <App />
        <Address addressList={addresses} />
    </div>,
    document.getElementById('root')
);
const getLast = (wrapper) => {
    const ninep = wrapper.find('p').last().debug();
    console.log(ninep);
};

const getFirst = (wrapper) => {
    const ninep = wrapper.find('p').first().debug();
    console.log(ninep);
};

constructor(props) {
    super(props);

    console.log('ADDRESS PROPS', typeof this.props);
    const address = this.props.addressList[0];
    this.state = {
        firstName: address.firstName,
        lastName: address.lastName,
        street: address.street,
        city: address.city,
        state: address.state,
        zip: address.zip,
        phone: address.phone,
        website: address.website
    }
}
setAddress = () => {
    const address = this.props.addressList[1];

    this.setState({
        firstName: address.firstName,
        lastName: address.lastName,
        street: address.street,
        city: address.city,
        state: address.state,
        zip: address.zip,
        phone: address.phone,
        website: address.website
    })
};


class App extends Component {
    constructor() {
        super();//calling the parent class constructor

        this.state = {
            nine: '0',
            firstName: 'Brenda',
            lastName:''
        };

        bar = () => {


            this.setState({
                nine: '9',
                firstName: 'Brenda',
                lastName: 'Means'
            })

        };
        render();
        {

        }
        return (
            <div className="App">

                <p className="App-intro">
                    Nine:{this.state.nine}
                </p>

                <button className="elf" onClick={this.getNine}>Get Nine</button>

            </div>

        );const unknown = 'unknown';
        const addresses = [
            {
                firstName: unknown,
                lastName: unknown,
                street: unknown,
                city: unknown,
                state: unknown,
                zip: unknown
            },
            {
                firstName: 'Patty',
                lastName: 'Murray',
                street: unknown,
                city: 'Seattle',
                state: 'WA',
                zip: unknown
            }

        ];

        export default addresses;
    }
}

export default App;



