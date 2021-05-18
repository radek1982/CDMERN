import React, {useState} from 'react'
import axios from "axios"
import {Form, FormGroup, FormLabel, FormControl, Button, Spinner} from "react-bootstrap"

const Edit = (props)  => {
    
    const afterUpdate = props.afterUpdate;
    const [ready, setReady] =useState(true);
    const [data, setData] = useState({});
    const id = props.id;

    if (id!==null) {
      console.log(id);
    }
    
    return(
    
    <Form onSubmit={(e) => {
      e.preventDefault();
      setReady(false);
      const dt = {
        title: e.target.title.value,
        price: e.target.price.value,
        description: e.target.description.value,
      }

  

      axios.post("http://localhost:8000/api/products/new", dt)
    
        .then((x) => {
          setData(x.data.product);
          afterUpdate(x.data.product);
          setReady(true)
        })
        .finally((x)=> {
          setData(data);
          setReady(true)
      
        })
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
        <Button variant="primary" type="submit" disabled={!ready}> Add Product</Button>
      </FormGroup>
  
    {!ready?<Spinner animation="border"></Spinner>:""}
      
  
  
      
      
    </Form>)
  }
  
  export default Edit