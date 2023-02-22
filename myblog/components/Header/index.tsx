import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { Button, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Header.css';

interface IProps {
    brand?: string;
}

const Header: React.FC<IProps> = (props: IProps) => (
      <Navbar bg="light" expand="md" fixed="top" className="justify-content-between">
        <LinkContainer to="/">
          <Navbar.Brand className="font-weight-bold text-muted">
             <h6>{props.brand}</h6>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="top-nav"/>
        <Navbar.Collapse id="top-nav" className="justify-content-end">
            <Nav className="ml-auto">
                <LinkContainer to="/blog">
                    <Nav.Link>Blog</Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
);

Header.defaultProps = {
    brand: 'MyApp',
}

export default Header;