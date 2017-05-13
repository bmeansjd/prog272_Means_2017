/**
 * Created by bcuser on 5/10/17.
 */




this.onAddressChange = this.onAddressChange.bind(this);//for constructor




onAddressChange(event) {
    this.addressIndex += 1;
    const address = addresses[this.addressIndex];

    this.setState({
        address: address
    })
};