
import React, {useEffect, useState} from "react";
import axios from "axios";
import Edit from "./Edit";
import {Link} from "@reach/router";
import {Spinner} from "react-bootstrap";

const List =(props) => {

    const [products, setProducts] = useState([]);
    const [done, setDone] = useState(false)
   
    useEffect(() => {
       !done && axios.get("http://localhost:8000/api/products").then((r) => setProducts(r.data.products)).then(() => setDone(true));
    }, [done]);


      const makeItem = (key, label)  =>{return (<li key={key}> <Link to={`/detail/${key}`}> {label}</Link></li>)}
      const list= products.map((p) => makeItem(p._id, p.title));

    //  console.log(list);

    return (
        <>
        <Edit></Edit>
            <h2> All Products</h2>
        
        <ul>    
            
            {list} </ul>
            {!done ?  <Spinner animation="border" ></Spinner>: ""}
          </>
              )
}

export default List;