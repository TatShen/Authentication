import NavBar from "../malecules/Nav";
import Form from "../organisms/Form";
import React from "react";
import '../App.css'



function Home (){
    return (
      <div className="App">
        <header className="App-header">
        <h>Hi There!</h>
       </header>
       <main className="App-header">
       <NavBar/>
      <Form/>
      </main>
      </div>
    );
  }
 


export default Home;
