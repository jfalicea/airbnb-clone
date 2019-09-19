import {combineReducers} from 'redux';
import authReducer from './authReducer'

//comebine reducer gets an object that defines the alias to the reducer!!! 
const rootReducer = combineReducers({
    auth:authReducer

})

export default rootReducer;
