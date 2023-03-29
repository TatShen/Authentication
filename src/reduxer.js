import {createStore} from 'redux'


const defaultState = {
    isReg: true
}

action = {type:'changeForm'}

const reducer = (state=defaultState, action)=>{
    switch(action.type){
        case 'changeForm':
            return {...state, isReg: !state.isReg}
        
        default:
            return state
    }
}

const store = createStore(reducer)