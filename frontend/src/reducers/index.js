
import { combineReducers } from "redux";
import {formReducer, userReducer} from './userReducer';


const rootReducer = combineReducers({
    user : userReducer,
    form : formReducer,
})


export default rootReducer;