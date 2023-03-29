import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux'
import { Provider } from 'react-redux';


const defaultState = {
    isReg: true
}

const action = {type:'changeForm'}

const reducer = (state=defaultState, action)=>{
    switch(action.type){
        case 'changeForm':
            return {...state, isReg: !state.isReg}
        
        default:
            return state
    }
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
   <App />
 </Provider>
);


