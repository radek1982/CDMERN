import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import List from './List';
import Detail from "./Detail"
import Delete from "./Delete"

import {Router} from "@reach/router"
import {Container, Navbar,} from "react-bootstrap"
import { Fragment } from 'react';
function App() {
  return (
    <Fragment>
         <Navbar  bg="dark" variant="dark">
              <Navbar.Brand>Product Manager</Navbar.Brand>
            </Navbar>
    <Container>    
    <Router>
      <List path="/"></List>
      <List path=":rid"></List>
      <List path="/edit/:rid" mode="edit"></List>
      <Detail path="/detail/:rid"></Detail>
      <Delete path="/delete/:rid" button={false}></Delete>
    </Router>
    </Container>
    </Fragment>
  )
}


export default App;
