import React from "react";
import Nav from "react-bootstrap/Nav";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReg: this.props,
    };
    console.log(this.state.isReg);
    
    
  }



  render() {
    return (
      <Nav justify variant="tabs" column sm="3">
        <Nav.Item
         
          onClick={this.handleClick}
        >
          <Nav.Link  className={this.state.isReg ? "active" : ""}> Sign In</Nav.Link>
        </Nav.Item>
        <Nav.Item
         
          onClick={this.handleClick}
        >
          <Nav.Link  className={this.state.isReg ? "" : "active"}>Sign Up</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default NavBar;
