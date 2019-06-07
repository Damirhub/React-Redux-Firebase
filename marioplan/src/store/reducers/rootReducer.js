import {projectReducer, secondReducer} from "./projectReducer";
import authReducer from "./authReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers ({
    
    auth: authReducer,
    fromRootReducer: projectReducer,
    testSecondReducer: secondReducer
})

export default rootReducer;