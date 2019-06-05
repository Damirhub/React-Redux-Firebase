import projectReducer from "./projectReducer";
import authReducer from "./authReducers";
import { combineReducers } from "redux";


// const rootReducer = combineReducers({
//     auth: authReducer,
//     projectFromRootReducer: projectReducer
// })

// export default rootReducer;

const rootReducer = combineReducers ({
    auth: authReducer,
    projectFromRootReducer: projectReducer
})

export default rootReducer;