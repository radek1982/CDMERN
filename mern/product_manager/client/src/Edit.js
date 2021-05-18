import axios from "axios";
import React, {useState, useEffect} from "react"
import APIEndpoints from "./Config"

import {Form,FormGroup,FormControl,FormLabel, Button, Spinner} from "react-bootstrap"


const  Edit = props =>{
    let [done,setDone] = useState(false);
const [data, setData] = useState({title: "", price: "0", description: ""});

const titleCase = (s)   => s.charAt(0).toUpperCase()+s.slice(1);
const noop = (x) => {}

const mode = props.mode || "add"
const id =  props.rid || ""
const modeWord = titleCase(props.mode || "add");
const buttonWord = titleCase(mode === "edit" ? "update" : "add");
const title = `${modeWord} Product`;
const caption = `${buttonWord} product`;



const change=(e) => {
    setData({...data, [e.target.name]: e.target.value})
}


const submit=(e) => {
   
    
        e.preventDefault();
     
        setDone(false);
     let p = axios.post(APIEndpoints.create(), data); 
        if (mode === "add") {
        }
        else {
            p = axios.put(APIEndpoints.update(id),data)
        }
      
         p.then((r) => onUpdate(r)).then(() => setDone(true))
      
     }
    


const onUpdate = props.onUpdate || noop 


//const dataPromise  = new Promise((res, rej) => setTimeout((res({data:{products:[{title: "X", price:1000, description: "XYZ"}]}}),100)));
const web =  axios.get(APIEndpoints.detail(""));
useEffect(() => {
    web
    .then((x) => 

    {
        console.log(x);
        setData({...x.data.products[0]})}).catch(e => console.log(e))
    .finally(() => setDone(true))
}, [data]);
return (
<>
<Form method="POST" onSubmit= {submit}>


<h2>{title} </h2>
<FormGroup>
    <FormLabel>Title</FormLabel>
    <FormControl type="text" name="title" value={data.title} onChange={change}></FormControl>
</FormGroup>

<FormGroup>
    <FormLabel>Price</FormLabel>
    <FormControl type="text" name="price" value={(data.price)} onChange={change}></FormControl>
</FormGroup>

<FormGroup>
    <FormLabel>Description</FormLabel>
    <FormControl as="textarea" name="description" value={(data.description)} onChange={change}></FormControl>
</FormGroup>
<Button variant="primary" type="submit">
{caption}
</Button>
{!done ? <Spinner animation="border"></Spinner> : null}
</Form>
</>)
}

export default Edit