import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import { getFirebase, reduxFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, 
    compose(
        composeEnhancers(applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore}))),
        reduxFirestore(fbConfig),
        reduxFirebase(fbConfig)
        )
)

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
