import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { makeStyles, Avatar, Badge } from '@material-ui/core'
import { MailOutlineRounded, NotificationsNone } from '@material-ui/icons'
import { connect } from 'react-redux'
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
// import Logo from './../supports/img/logo3.png'
import Logo2 from './../supports/img/logo1.png'
import { onUserLogout } from './../redux/actions'
import { API_URL } from '../helpers'

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

      onBtnLogOutClick = () =>{
        this.props.onUserLogout()
      }

    render(){
        const {bigAvatar} = useStyle
        const { margin } = style2
        console.log('nyari image ====>',this.props.image)
        return(
            <div>  
                <div className='topmenu   '>
                    <Navbar color="" light expand="md" >
                        <NavbarBrand href="/">
                            <img src={Logo2} height='30px' alt='qlas logo' />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            { this.props.token !== '' 
                                ?
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
                                <NavLink href="" className=''><span className=' '>{this.props.username} </span></NavLink>
                            </NavItem>
                            
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav >
                                        <Avatar alt='hisbu' src={`${API_URL}${this.props.image}`} style={bigAvatar}/>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                    <Link to='/dashboard/profilePage'>
                                        <DropdownItem>
                                        Profile
                                        </DropdownItem>                                    
                                    </Link>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem onClick={this.onBtnLogOutClick}>
                                        {/* <Redirect to='/'> */}
                                            Logout
                                        {/* </Redirect> */}
                                    </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                                :
                                null
                            }
                        </Collapse>
                    </Navbar>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        username    : state.auth.username,
        token       : state.auth.token,
        image       : state.auth.image
    }
}
export default connect(mapStateToProps, {onUserLogout}) (TopMenu);