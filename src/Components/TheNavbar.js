import React from 'react';
import {
  Collapse,
  Button,
  Navbar,
  NavbarToggler,
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
import Picture from '../images/logo_transparent_small (1).png'


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

      <Navbar fixed="top" id='toplevel-nav' dark expand="lg">
        <Container>
        <Link className='the-logo' to="/"><img alt='MedTV logo' src={Picture}/></Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className='nav-links' to="/videos"><div className='nav-item-container'>Videos</div></Link>
              </NavItem>
              <NavItem>
                <NavLink href="/404">Contribute</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Browse
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Cranial
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
                    <Button className="nav-go" type="button">Go!</Button>
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