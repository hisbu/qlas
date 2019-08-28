import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import { makeStyles, Avatar, Badge } from '@material-ui/core'
import { MailOutlineRounded, NotificationsNone } from '@material-ui/icons'
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


const useStyle = makeStyles({
    bigAvatar:{
        margin:0,
        width: 60,
        height: 60,
    }
})

const style2 = makeStyles(theme=>({
    margin:{
        margin: theme.spacing(2)
    }
}))

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
        const {bigAvatar} = useStyle
        const { margin } = style2
        return(
            <div>  
                <div className='topmenu   '>
                    <Navbar color="" light expand="md" >
                        <NavbarBrand href="/">
                            <img src={Logo2} height='30px' alt='qlas logo' />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            <NavItem className=' menuItem '>
                                <NavLink href="/components/">
                                    <Badge className={margin} color='primari' variant='dot'>
                                        <NotificationsNone/>
                                    </Badge>
                                </NavLink>
                            </NavItem>
                            <NavItem className=' menuItem '>
                                <NavLink href="/components/">
                                    <Badge className={margin} color='primari' variant='dot'>
                                        <MailOutlineRounded/>
                                    </Badge>
                                </NavLink>
                            </NavItem>
                            <NavItem className=' menuItem '>
                                <NavLink href="" className=''><span className=' '>Qiandra Alea </span></NavLink>
                            </NavItem>
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
                                    {/* <Redirect to='/'> */}
                                        Logout
                                    {/* </Redirect> */}
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