import React, {Component} from 'react';
import logo from '../images/Vector.svg';
import { Jumbotron } from 'react-bootstrap';
import '../css/App.css';
class ElfHeader extends Component {

    render() {

        return (
            <div>

            <Jumbotron>

                <div>
                    <img src={logo} className='App-logo' alt='logo'/>
                    <h2>Welcome to Prog272</h2>
                </div>

            </Jumbotron>
            </div>
        );
    }
}

export default ElfHeader;

/*
 <Navbar inverse fixedTop>
 <Grid>
 <Navbar.Header>
 <Navbar.Brand>
 <Link to='/'>React App</Link>
 </Navbar.Brand>
 <Navbar.Toggle>

 <Link to='/'>Address Show</Link>
 <Link to='/edit'>Address Edit</Link>
 <Link to='/small'>SmallNumbers</Link>

 </Navbar.Toggle>
 </Navbar.Header>
 </Grid>
 </Navbar>
 */
