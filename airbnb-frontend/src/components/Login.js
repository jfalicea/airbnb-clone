import React from 'react';
import { connect } from 'react-redux';
import {combineActionCreators, bindActionCreators} from 'redux';
import loginAction from '../actions/loginAction'

class Login extends React.Component{
    state = {email: "", password: "", msg:""}

    changeEmail = (e)=>{this.setState({email: e.target.value})}
    changePass = (e)=>{this.setState({password: e.target.value})}

    componentDidUpdate(prevProps,prevState){
        if(this.props.auth.msg !== prevProps.auth.msg){
            let msg =""
            if((this.props.auth.msg === 'badPass')){
                msg = 'We do not have a a user with this password. '
            } else if((this.props.auth.msg === 'loggedIn')){
                this.props.closeModal()//
            }else if ((this.props.auth.msg === 'noEmail')) {
                msg = 'this email is not registered. '
            }
            this.setState({
                msg
            })
    }
    }


    submitLogin = (e)=>{
        e.preventDefault();
        // Validation for email and pass
        const formData = {...this.state}
        this.props.login(formData)
    }
    
    handleModalChange =()=>this.props.changeModalContent('singup')
    render(){
        return(
            <div className="login-form">
                <p className="red-text">{this.state.msg}</p>
                <form onSubmit={this.submitLogin}>
                    <button className="facebook-login">Connect With Facebook</button>
                    <button className="google-login">Connect with Google</button>
                    <span>or</span>
                    <input onChange={this.changeEmail} value={this.state.email} className="email-signup" placeholder="Email address" />
                    <input type="password" onChange={this.changePass} value={this.state.password}  className="password-signup" placeholder="Password" />
                    <button className="sign-up-button">Log In</button>
                    <div className="border-rule"></div>
                    <div className="login-text align-left">Don't have an account? <span onClick={this.handleModalChange}>Sign Up</span></div>

                </form>
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch){
    //make our otherwise simple function an action creator!
    return bindActionCreators({
        login:loginAction
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
// export default Login;