/**
 * Created by charlie on 5/1/17.
 */

import React, {Component} from 'react';
import { Nav, Navbar, NavItem   } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class ElfMenu extends Component {

    render() {
        const navbarInstance = (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer exact to='/'><NavItem>Local Storage</NavItem></LinkContainer>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer exact to='/about'><NavItem>About</NavItem></LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
        return (
            <div>
                {navbarInstance}
            </div>
        );
    }
}

export default ElfMenu;
