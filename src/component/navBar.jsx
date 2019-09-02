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
  import { Link } from 'react-router-dom'
  import {BtnBgWhite} from './../component/btnQlas'
  import { connect } from 'react-redux'
  import TopMenu from './topMenu'
  import { onUserLogout } from '../redux/actions/authActions'

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
    console.log(this.props.position)
    console.log(this.props.username)
  }

  onBtnLogOutClick = () =>{
    this.props.onUserLogout()
  }
  render() {
    const {bigAvatar} = useStyle
    if(this.props.position==='landing'){
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
                                <Avatar alt='hisbu' src={qian} style={bigAvatar}/>
                            </DropdownToggle>
                            <DropdownMenu right>
                            <DropdownItem>
                              <Link to='/dashboard'>
                               Dashboard
                              </Link>
                            </DropdownItem>
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
    if(this.props.position==='dashboard'){
      return (
        <TopMenu/>
        
      );
  }
    return (
      <div className='Navbar2 detailPage'>
        <Navbar light expand="md" className='Navbar'>
            <div className="container">
            <NavbarBrand href="/">
                <img src={Logo2} height='30px' alt='qlas logo' />
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
                                <Avatar alt='hisbu' src={qian} style={bigAvatar}/>
                            </DropdownToggle>
                            <DropdownMenu right>
                            <DropdownItem>
                              <Link to='/dashboard'>
                               Dashboard
                              </Link>
                            </DropdownItem>
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

const mapStateToProps = (state)=>{
  return{
    position  : state.page,
    username      : state.auth.username
  }
}

export default connect(mapStateToProps, {onUserLogout}) (Example);