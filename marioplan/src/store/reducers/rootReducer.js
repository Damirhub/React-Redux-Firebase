import {projectReducer, secondReducer} from "./projectReducer";
import authReducer from "./authReducers";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers ({
    
    auth: authReducer,
    fromRootReducer: projectReducer,
    testSecondReducer: secondReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;