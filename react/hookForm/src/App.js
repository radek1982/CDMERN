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
  const minLen = (l) => (e) => e.length >=l;
  const matches = (f) => (e,state) => {

   return e ===state[f];
  }

  const [errors,setError] = useState({
    first: {validation: minLen(2), msg: "First Name must be min 2 characters"},
    last: {validation: minLen(2), msg: "Last Name must be min 2 characters"},
    email: {validation: minLen(5), msg: "Email must be min 5 characters"},
    password: {validation: minLen(8), msg:"Password must be min 8 characters"}, 
    confirm: {validation: matches("password"), msg: "Confirmation must match password"},
  })
  return (
    <div>
      <Form state={state} update={setState} errors={errors} setError={setError}></Form>
      <Data state={state}></Data>

   </div>

  )
}

export default App;
