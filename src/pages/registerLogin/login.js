import React, {Component} from 'react'
import { Paper, Input, Button } from '@material-ui/core'
import './style-reglog.css'
import {BtnBgQcolor} from '../../component/btnQlas'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { onUserLogin } from '../../redux/actions'


class LoginForm extends Component{
    
    onBtnLoginClick = () => {
        var email = this.refs.email.value
        var password = this.refs.password.value

        this.props.onUserLogin({ email, password})

    }

    renderError = () => {
        if(this.props.error.length > 0) {
            return <p className="alert alert-danger">{this.props.error}</p>;
        }
    }

    renderButton = () => {
        if(this.props.loading) {
            return <i className="fa fa-spinner fa-spin" style={{ fontSize: '54px' }}/>
        }
        return <button  name="submit" id="submit"  value="Login" onClick={this.onBtnLoginClick} >Login</button>
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
                                <button id="switch1">Sign Up</button>
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
                            <input ref='email' type="text" name="email" placeholder="EMAIL" style={{paddingLeft:'1em'}} />
                            <input ref='password' type="password" name="password" placeholder="PASSWORD" style={{paddingLeft:'1em'}}/>
                            </div>
                            <p>FORGET PASSWORD?</p>
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