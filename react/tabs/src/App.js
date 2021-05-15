import React from "react";
import "./App.css"
import {Tabs,Tab} from './Tabs';

function App() {
  return (<div> 
    <h1> Tabs </h1>
    <Tabs>
      <Tab header="One"> This is One</Tab>
      <Tab header="Two"> This is Two</Tab>
      <Tab header="Three"> This is Three</Tab>
    </Tabs>
  </div>)
}

export default App;