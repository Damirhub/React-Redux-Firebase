import projectReducer from "./projectReducer";
import authReducer from "./authReducers";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
})

export default rootReducer;