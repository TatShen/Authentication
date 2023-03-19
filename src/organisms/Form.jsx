import SignUp from "../malecules/SignUp";
import SignIn from "../malecules/SignIn";
import React from "react";


class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isReg: false
        }
}

componentDidMount(){

}

componentWillUnmount(){

}

render(){
        return (
            <div>
               <SignIn/>
               <SignUp/>
            </div>
               
            
             
           );
    }
}



  
  export default Form