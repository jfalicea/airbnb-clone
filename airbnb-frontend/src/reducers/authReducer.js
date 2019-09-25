export default (state = {}, action)=> {
    if(action.type === 'signUp'){
        console.log("SIGUP REDUCER!!!!",action.payload.data)
        return action.payload.data
    } else if(action.type === 'logout'){
        return {}
    }else if (action.type === 'login'){
        return action.payload.data
    } else if (action.type === "aThunkAction"){
        console.log("I'm a Thunk Action! ")
    }
    return state;
}