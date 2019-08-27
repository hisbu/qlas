import React, {Component} from 'react'
import { makeStyles, Avatar } from '@material-ui/core'
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
    DropdownItem} from 'reactstrap';
import qian from '../supports/img/qian.jpg'
import Logo from './../supports/img/logo3.png'
import Logo2 from './../supports/img/logo1.png'
import { Link } from 'react-router-dom'

const useStyle = makeStyles({
    bigAvatar:{
        margin:0,
        width: 60,
        height: 60,
    }
})

class TopMenu extends Component{
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
    render(){
        const {avatar, bigAvatar} = useStyle

        return(
            <div>  
                <div className='header kotak '>
                    <Navbar color="" light expand="md" >
                        {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            {/* <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem> */}
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav >
                                    <Avatar alt='hisbu' src={qian} style={bigAvatar}/>
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
            </div>
        )
    }
}

export default TopMenu;