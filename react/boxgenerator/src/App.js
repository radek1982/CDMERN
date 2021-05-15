import React, {useState} from "react";
import Form from './Form';
import './App.css';
import Swatches from './Swatches';

function App() {

  const [colors, setColors] = useState([]);
  const update = (e)=> {
    console.log(e);
    setColors(colors.concat(e));
  }
  
  
  return(<div>
    <Form onSubmit={update}></Form>
    <Swatches colors={colors}></Swatches>
  </div>)
}

export default App;
