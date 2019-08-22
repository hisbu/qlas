import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,} from 'reactstrap';

  import Logo from './../supports/img/logo3.png'
  import Logo2 from './../supports/img/logo1.png'
  import { Link } from 'react-router-dom'
  import {BtnBgWhite} from './../component/btnQlas'
  import { connect } from 'react-redux'

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
  }
  render() {
    if(this.props.position===''){
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
                      <NavItem>
                        <Link to='/dashboard' className='clear'>
                          <NavLink>
                            <BtnBgWhite title={`Masuk`}/>
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
                  <NavItem>
                    <Link to='/dashboard' className='clear'>
                      <NavLink>
                        <BtnBgWhite title={`Masuk`}/>
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

const mapStateToProps = (state)=>{
  return{
    position : state.page
  }
}

export default connect(mapStateToProps) (Example);