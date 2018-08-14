import React from 'react';
import {
  Collapse,
  Button,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroupAddon, InputGroup, Input,
  Container
} from 'reactstrap';
import { Link } from 'react-router-dom'


export default class TheNavbar extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

    return (

      <Navbar fixed="top" className="bg-primary" dark expand="lg">
        <Container>
          <NavbarBrand><Link to="/">MedTV</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/videos">Videos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="404.html">Contribute</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Browse
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Head
                  </DropdownItem>
                  <DropdownItem>
                    Appendages
                  </DropdownItem>
                  <DropdownItem>
                    Heart
                  </DropdownItem>
                  <DropdownItem>
                    Lung
                  </DropdownItem>
                  <DropdownItem>
                    Vascular
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <InputGroup>
                  <Input type="text" className="form-control" placeholder="Search for..." />
                  <InputGroupAddon addonType="append" className="input-group-btn">
                    <Button className="nav-go btn-success" type="button">Go!</Button>
                  </InputGroupAddon>
                </InputGroup>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}