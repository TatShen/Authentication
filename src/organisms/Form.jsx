import SignUp from "../malecules/SignUp";
import SignIn from "../malecules/SignIn";
import React from "react";
import {useDispatch, useSelector} from 'react-redux'


function Form (){
 
    const state = useSelector(state=>state.isReg)
    return (
        <div>
         {(state)?<SignIn></SignIn>:<SignUp></SignUp>}
        </div>
           
        
         
       );
}




  
  export default Form