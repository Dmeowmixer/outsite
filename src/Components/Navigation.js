import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class Navigation extends Component {
  constructor(props){
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
  render(){
    return(
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img src="https://global-uploads.webflow.com/5ab14126edfae6905fd3ff69/5beadd851f50537b6601023f_Web%20Logo.png" alt="Outsite Logo" width="125px"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Book</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Trips</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Monthly Deals</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Rewards</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Perks</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Experts</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                <img src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/720/ninja-background-512.png" alt="" height="28px" width="28px"/>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
export default Navigation;