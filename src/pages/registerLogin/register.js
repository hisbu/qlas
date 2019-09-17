import React, {Component} from 'react'
// import { Snackbar, Slide } from '@material-ui/core'
import './style-reglog.css'
// import {BtnBgQcolor} from '../../component/btnQlas'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { onUserRegister } from '../../redux/actions'


class LoginForm extends Component{
    state={
        open : false
    }
    onBtnRegisterClick = () => {
        var username = this.refs.username.value;
        var email = this.refs.email.value;
        var password = this.refs.password.value;

        this.props.onUserRegister({ username, email, password });
    }

    renderError = () => {
        if(this.props.error.length > 0) {
            return <div className="alert alert-danger">{this.props.error}</div>;
            // this.setState({open:true})
        }
    }

    renderButton = () => {
        if(this.props.loading) {
            return <i className="fa fa-spinner fa-spin" style={{ fontSize: '54px' }}/>
        }
        return <button  name="submit" id="submit"  value="Sign Up" onClick={this.onBtnRegisterClick} >Sign Up</button>
    }

    componentDidMount(){
        console.log(this.props.username)
        console.log(this.props.loading)
        console.log(this.props.error)
    }

    // componentWillUpdate(){
    //     {this.renderError()}
    // }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({open: false});
      }

    
    render(){
        if(localStorage.getItem('token')){
            return <Redirect to='/dashboard'/>
        }
        if(this.props.username === ''){
            return(
                <div className='loginForm '>
                    <div className="formContainer ">
                        <div className="backbox">
                            <div className="loginMsg visibility">
                                <div className="textcontent">
                                <p className="title">Don't have an account?</p>
                                <p>Sign up to save all your graph.</p>
                                <button id="switch1">Sign Up</button>
                                </div>
                            </div>
                            <div className="signupMsg ">
                                <div className="textcontent">
                                <p className="title">Have an account?</p>
                                <p>Log in to see all your collection.</p>
                                <Link to='/login'><button id="switch2">LOG IN</button></Link>
                                </div>
                            </div>
                        </div>
                        {/* backbox */}
                        <div className="frontboxkiri">
                            <div className="signup ">
                                <h2>SIGN UP</h2>
                                <div className="inputbox">
                                <input ref='username' className='paddingInput' type="text" name="fullname" placeholder="FULLNAME" />
                                <input ref='email' className='paddingInput'type="text" name="email" placeholder="EMAIL" />
                                <input ref='password' className='paddingInput' type="password" name="password" placeholder="PASSWORD" />
                                </div>
                                {this.renderButton()}
                                {this.renderError()}
                            
                                {/* <button>SIGN UP</button> */}
                            </div>
                        </div>
                        {/* frontbox */}
                    </div>
    
                </div>
            )
        }
        return <Redirect to='/waitingverification'/>
    }
}

const mapStateToProps = (state) =>{
    return {
        email       : state.auth.email,
        loading     : state.auth.loading,
        error       : state.auth.error,
        username    : state.auth.username
    }
}
export default connect(mapStateToProps, { onUserRegister }) (LoginForm);