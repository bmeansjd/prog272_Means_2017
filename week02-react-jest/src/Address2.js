/**
 * Created by bcuser on 4/17/17.
 */
import Header from './components/Header';

// Code omitted here

it.only('renders and reads H1 text', () => {
    const wrapper = shallow(<Header />);
    const welcome = <h2>Welcome to React</h2>;
    expect(wrapper.contains(welcome)).toEqual(true);
});

const unknown = 'unknown';
constructor(superprops); {
    //super(props);

    console.log('ADDRESS PROPS', typeof this.props);
    const address = this.props.addressList[0];
    this.state = {
        firstName: address.firstName,
        lastName: address.lastName,
        street: address.street,
        city: address.city,
        zip: address.zip,
        state: address.state,
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
import App from './App';

// Code omitted here

it.only('renders and reads H1 text', () => {
    const wrapper = shallow(<App />);
    const welcome = <h2>Welcome to React</h2>;
    expect(wrapper.contains(welcome)).toEqual(true);
});
export default addresses;

