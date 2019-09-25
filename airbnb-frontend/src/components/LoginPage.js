import React from 'react';
import Login from './Login'
import './NavBar.css'


function LoginPage(props){
    const pushURL = localStorage.getItem('preLoginPage')? localStorage.getItem('preLoginPage'): '/'
  return(<>
      <div className='login-modal'  style={{"display":"block", "border":"1px solid black", "marginTop":"100px"}}>
          <Login closeModal={()=>{props.history.push(pushURL)}}/>
      </div>
  </>)
}
export default LoginPage;