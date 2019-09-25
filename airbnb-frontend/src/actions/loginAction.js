import axios from 'axios'


export default(data)=>{
    console.log('loginAction YOU TRIED TO LOGIN. ', data)
    const loginURL=`${window.apiHost}/users/login`
    const loginResponse = axios.post(loginURL,data)
     //AXIOS RETURNS A PROMISE.... SO WE NEED SOME MIDDLEWARE! 
    //THIS WAITS BECAUSE VIA redux-promise!!!! 
    return {
        type: 'login',
        payload: loginResponse
    }
}