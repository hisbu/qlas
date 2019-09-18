import React, {Component} from 'react'
// import { Paper, Input, Button } from '@material-ui/core'
import './style-reglog.css'
// import {BtnBgQcolor} from '../../component/btnQlas'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { onUserLogin } from '../../redux/actions'
import {Spinner} from 'reactstrap'


class LoginForm extends Component{
    state={
        loading :false
    }
    
    onBtnLoginClick = () => {
        var email = this.refs.email.value
        var password = this.refs.password.value

        this.props.onUserLogin({ email, password})
        this.setState({loading: true})
    }

    renderError = () => {
        if(this.props.error.length > 0) {
            return <div className="alert alert-danger">{this.props.error}</div>;
        }
    }

    renderButton = () => {
        return <button  name="submit" id="submit"  value="Login" onClick={this.onBtnLoginClick} >{ this.state.loading ? <Spinner size='sm'/> : 'Login'}</button>
    }

    componentDidMount(){
        console.log(this.props.username)
        console.log(this.props.loading)
        console.log(this.props.error)
    }

    
    render(){
        if(this.props.username === ''){
            return(
                <div className='loginForm '>
                    <div className="formContainer ">
                        <div className="backbox">
                            <div className="loginMsg">
                                <div className="textcontent">
                                <p className="title">Don't have an account?</p>
                                <p>Sign up to save all your graph.</p>
                                <Link to='/register'>
                                    <button id="switch1">Sign Up</button>
                                </Link>
                                </div>
                            </div>
                            <div className="signupMsg visibility">
                                <div className="textcontent">
                                <p className="title">Have an account?</p>
                                <p>Log in to see all your collection.</p>
                                <button id="switch2">LOG IN</button>
                                </div>
                            </div>
                        </div>
                        {/* backbox */}
                        <div className="frontbox">
                        <div className="login">
                            <h2>LOG IN</h2>
                            <div className="inputbox">
                            <input ref='email' type="text" name="email" placeholder="EMAIL" className='paddingInput' />
                            <input ref='password' type="password" name="password" placeholder="PASSWORD" className='paddingInput'/>
                            </div>
                            {/* <p>FORGET PASSWORD?</p> */}
                            {this.renderError()}
                            {this.renderButton()}
                            {/* <button>LOG IN</button> */}
                        </div>
                        <div className="signup hide">
                            <h2>SIGN UP</h2>
                            <div className="inputbox">
                            <input type="text" name="fullname" placeholder="  FULLNAME" />
                            <input type="text" name="email" placeholder="  EMAIL" />
                            <input type="password" name="password" placeholder="  PASSWORD" />
                            </div>
                            <button>SIGN UP</button>
                        </div>
                        </div>
                        {/* frontbox */}
                    </div>
    
                </div>
            )
        }
        return <Redirect to='/dashboard'/>
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
export default connect(mapStateToProps, { onUserLogin }) (LoginForm);