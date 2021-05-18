import axios from "axios";
import React, {useState, useEffect} from "react"

import {Form,FormGroup,FormControl,FormLabel, Button, Spinner} from "react-bootstrap"


const  Edit = props =>{
const mode = props.mode || "Add";
const title = `${mode} Product`;
const caption = `${mode} product`;

const [data,setData] = useState({});

const [done,setDone] = useState(true)

return (
<>
<Form method="POST" onSubmit={(e) =>{
    e.preventDefault();

    let formData ={};
    const f = new FormData(e.target);

    for (let [k,v] of f ) {
        
        formData[k] = v;
    
    }
    
    setDone(false);
    axios.post("http://localhost:8000/api/products/new", formData).then((r) => 
    console.log(r.data.product)).then(() => setDone(true))
    
}}>

<FormGroup>
    <FormLabel>Title</FormLabel>
    <FormControl type="text" name="title"></FormControl>
</FormGroup>

<FormGroup>
    <FormLabel>Price</FormLabel>
    <FormControl type="price" name="price"></FormControl>
</FormGroup>
<FormGroup>
    <FormLabel>Description</FormLabel>
    <FormControl type="text" name="description"></FormControl>
</FormGroup>
<FormGroup>
    <FormLabel>Description</FormLabel>
    <FormControl as="textarea" name="description"></FormControl>
</FormGroup>
<Button variant="primary" type="submit">
{caption}
</Button>
{!done ? <Spinner animation="border"></Spinner> : null}
</Form>
</>)
}

export default Edit