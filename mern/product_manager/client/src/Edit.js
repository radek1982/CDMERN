import React from 'react'
import axios from "axios"
import {Form, FormGroup, FormLabel, FormControl, Button} from "react-bootstrap"

const Edit = ( )  => {
    return(
    

    <Form onSubmit={(e) => {
      e.preventDefault();
  
      const data = {
        title: e.target.title.value,
        price: e.target.price.value,
        description: e.target.description.value,
      }
      axios.post("http://localhost:8000/api/products/new", data)
        .then((r) => console.log(r.data)) 
        .catch((r) => console.log(r.data))
    }}> 
  
    
    <h2> Add a product</h2>
    
      <FormGroup> 
        <FormLabel >Title</FormLabel>
        <FormControl type="text" id="title" name="title"></FormControl>
      </FormGroup>
      <FormGroup> 
        <FormLabel>Price</FormLabel>
        <FormControl type="text" id="price" name="price"></FormControl>
      </FormGroup>
      <FormGroup> 
        <FormLabel> Description</FormLabel>
        <FormControl as="textarea" id="description" name="description"></FormControl>
      </FormGroup>
  
      <FormGroup> 
        <Button variant="primary" type="submit"> Add Product</Button>
      </FormGroup>
  
      
  
  
      
      
    </Form>)
  }
  
  export default Edit