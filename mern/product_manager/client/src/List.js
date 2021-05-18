import React, { Fragment,useState,useEffect } from 'react'
import axios from "axios"
import Edit from "./Edit"
import {Spinner,Button} from "react-bootstrap"

const List = (props) => {

    // eslint-disable-next-line
    const [products,setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        
        axios.get("http://localhost:8000/api/products/").then(res => { 
        setProducts(res.data.products);
        setLoaded(true);
    })});
    
    const productData = loaded && products.length>0 && products.map((e,i) => (<tr key={e._id}><td>{e.title}</td> 
    <td><Button variant="danger" onClick= {(x) =>  {
        setLoaded(false);
    axios.delete("http://localhost:8000/api/products/delete/" + e._id).then(() => {setLoaded(false)}) 
    }} >Delete</Button></td></tr>))
    return (
    
    
    
    <Fragment>
        <Edit rid={props.rid} afterUpdate={(d) => {

        console.log('After update', d)
    setLoaded(false)}}></Edit>
        <hr></hr>
        
        <h2> All Products</h2>
        {!loaded ? <Spinner animation="border"></Spinner> : ""}   
        <table className="table table-striped">
            <thead>
            </thead>
        <tbody>
        {productData}
        </tbody>
        </table>
    </Fragment>)
}

export default List