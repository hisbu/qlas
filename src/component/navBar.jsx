import React from 'react';
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

  import Logo from './../supports/img/logo2.png'
  import { Link } from 'react-router-dom'
  import {BtnBgWhite} from './../component/btnQlas'

export default class Example extends React.Component {
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
      <div className='Navbar landingPage'>
        <Navbar light expand="md" className='Navbar'>
            <div className="container">
            <NavbarBrand href="/">
                <img src={Logo} height='30px' />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem className='vertCenter'>
                    <Link className='clear'>
                      <NavLink><span className='NavLink '>Academy</span></NavLink>
                      </Link>
                  </NavItem>
                  <NavItem className='vertCenter'>
                    <Link className='clear'>
                      <NavLink><span className='NavLink '>Tentang Kami</span></NavLink>
                      </Link>
                  </NavItem>
                  <NavItem>
                    <Link className='clear'>
                      <NavLink>
                        <BtnBgWhite title={'Masuk'}/>
                      </NavLink>
                    </Link>
                  </NavItem>
                </Nav>
            </Collapse>
            </div>
        </Navbar>
      </div>
    );
  }
}