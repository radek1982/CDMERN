import React from "react";
import "./App.css"
import {Router} from '@reach/router'

const Output = (props) => {

  let message = props.message || "welcome"; 
  let bg = props.background || "#FFF";
  let color = props.color || "#000";


  if (!isNaN(message))  {
    message = `The number is: ${message}`;
  } else {
    if (message!=="welcome")
    message = `The word is: ${message}`
  }

  return (<div style={{background: bg, color: color}}>{message}</div>)
}

function App() {
  return (<Router> 
    <Output path="/home"></Output>
    <Output path=":message"></Output>
    <Output path=":message/:background/:color"></Output>
    
 
  
  </Router>)
}

export default App;