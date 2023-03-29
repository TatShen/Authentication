import React from "react";
import Nav from "react-bootstrap/Nav";
import {useDispatch, useSelector} from 'react-redux'

function  NavBar () {
  const dispatch = useDispatch()
  const state = useSelector(state=>state.isReg)

  const changeForm = () => {
    dispatch({type:'changeForm'})
  }

    return (
      <Nav justify variant="tabs" column sm="3">
        <Nav.Item
         
          onClick={()=>changeForm()}
        >
          <Nav.Link  className={state ? "active" : ""}> Sign In</Nav.Link>
        </Nav.Item>
        <Nav.Item
         
          onClick={()=>changeForm()}
        >
          <Nav.Link  className={state ? "" : "active"}>Sign Up</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }


export default NavBar;
