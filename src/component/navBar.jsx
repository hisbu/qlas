import React from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,} from 'reactstrap';
import { makeStyles, Avatar } from '@material-ui/core'

  import Logo from './../supports/img/logo3.png'
  import Logo2 from './../supports/img/logo1.png'
  import qian from '../supports/img/qian.jpg'
  
  import { Link, withRouter } from 'react-router-dom'
  import {BtnBgWhite} from './../component/btnQlas'
  import { connect } from 'react-redux'
  import TopMenu from './topMenu'
  import { onUserLogout } from '../redux/actions/authActions'
  import { API_URL} from '../helpers'

  const useStyle = makeStyles({
    bigAvatar:{
        margin:0,
        width: 60,
        height: 60,
    }
})

class Example extends React.Component {
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

  componentDidMount(){
    // console.log(this.props.position)
    // console.log(this.props.username)
    // console.log('profile image ===========>',this.props.image)
  }

  onBtnLogOutClick = () =>{
    this.props.onUserLogout()
  }
  render() {
    console.log('posisition page ===========>',this.props.position)
    const {bigAvatar} = useStyle
    console.log(this.props.history.location.pathname)
    if(this.props.history.location.pathname ==='/'){
      console.log('====transaprant=====')
        return (
          <div className='Navbar landingPage'>
            <Navbar light expand="md" className='Navbar'>
                <div className="container">
                <NavbarBrand href="/">
                    <img src={Logo} height='30px' alt='qlas logo' />
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
                     {this.props.username !== ''
                        ? 
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav >
                                <Avatar alt='hisbu' src={`${API_URL}${this.props.image}`} style={bigAvatar}/>
                            </DropdownToggle>
                            <DropdownMenu right>
                            <DropdownItem>
                              <Link to='/dashboard'>
                               Dashboard
                              </Link>
                            </DropdownItem>
                            <Link to='/dashboard/profilePage'>
                                        <DropdownItem>
                                        Profile
                                        </DropdownItem>                                    
                                    </Link>
                            <DropdownItem divider />
                            <DropdownItem onClick={this.onBtnLogOutClick}>
                                {/* <Redirect to='/'> */}
                                    Logout
                                {/* </Redirect> */}
                            </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        :
                        <NavItem>
                          <Link to='/login' className='clear'>
                            <NavLink>
                              <BtnBgWhite title={`Masuk`}/>
                            </NavLink>
                          </Link>
                        </NavItem>

                     }
                    </Nav>
                </Collapse>
                </div>
            </Navbar>
          </div>
        );
    }
    if(this.props.history.location.pathname ==='/dashboard'){
      return (
        <TopMenu/>
        
      );
  }
    return (
      <div className='Navbar2 detailPage'>
        <Navbar light expand="md" className='Navbar2'>
            <div className="container">
            <NavbarBrand href="/">
                <img src={Logo2} height='30px' alt='qlas logo' />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem className='vertCenter'>
                    <Link to='/' className='clear'>
                      <span className='NavLink '>Academy</span>
                      </Link>
                  </NavItem>
                  <NavItem className='vertCenter'>
                    <Link to='/' className='clear'>
                      <span className='NavLink '>Tentang Kami</span>
                      </Link>
                  </NavItem>
                  {this.props.username !== ''
                        ? 
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav >
                                <Avatar alt='hisbu' src={`${API_URL}${this.props.image}`} style={bigAvatar}/>
                            </DropdownToggle>
                            <DropdownMenu right>
                            <DropdownItem>
                              <Link to='/dashboard'>
                               Dashboard
                              </Link>
                            </DropdownItem>
                            <Link to='/dashboard/profilePage'>
                                        <DropdownItem>
                                        Profile
                                        </DropdownItem>                                    
                                    </Link>
                            <DropdownItem divider />
                            <DropdownItem onClick={this.onBtnLogOutClick}>
                                {/* <Redirect to='/'> */}
                                    Logout
                                {/* </Redirect> */}
                            </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        :
                        <NavItem>
                          <Link to='/login' className='clear'>
                            <NavLink>
                              <BtnBgWhite title={`Masuk`}/>
                            </NavLink>
                          </Link>
                        </NavItem>

                     }
                </Nav>
            </Collapse>
            </div>
        </Navbar>
      </div>
    );
    
  }
}

const mapStateToProps = (state) => {
  return{
    position    : state.page,
    username    : state.auth.username,
    image       : state.auth.image
  }
}

export default withRouter(connect(mapStateToProps, {onUserLogout}) (Example));