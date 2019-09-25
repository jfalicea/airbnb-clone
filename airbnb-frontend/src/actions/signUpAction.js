import axios from 'axios'

export default (data) =>{
    console.log("signupAction",data)
    const signUpURL=`${window.apiHost}/users/signup`
    const axiosResponse = axios.post(signUpURL,data);
    return {
        type: "signUp",
        payload: axiosResponse
    }
}