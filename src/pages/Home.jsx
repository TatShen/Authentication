import NavBar from "../malecules/Nav";
import Form from "../organisms/Form";
import React from "react";
import '../App.css'


class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isReg:false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  

  handleClick() {
    console.log("click");
    this.setState((state) => ({
      isReg: !state.isReg,
    }));
    console.log(`new satate ${this.state}`);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <h>Hi There!</h>
       </header>
       <main className="App-header">
       <NavBar   isReg={this.state.isReg}
       />
      <Form/>
      </main>
      </div>
    );
  }
 
}

export default Home;
