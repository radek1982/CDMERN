import React, {useState} from 'react';
import Form from "./Form";
import Data from "./Data";
function App() {
  const [state, setState] =  useState({
    first: "",
    last: "",
    email: "",
    password: "", 
    confirm: "",
  })
  return (
    <div>
      <Form state={state} update={setState}></Form>
      <Data state={state}></Data>

   </div>

  )
}

export default App;
