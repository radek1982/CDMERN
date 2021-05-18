
import React, {useEffect, useState} from "react";
import axios from "axios";
import Edit from "./Edit";
import {Link} from "@reach/router";
import {Spinner} from "react-bootstrap";
import APIEndpoints from "./Config"
const List =(props) => {

    const refresh = () => {

      setDone(false);
    }
    const [products, setProducts] = useState([]);
    const [done, setDone] = useState(false)
   
    useEffect(() => {
       !done && axios.get(APIEndpoints.read()).then((r) => setProducts(r.data.products)).then(() => setDone(true));
    }, [done]);


      const makeItem = (key, label)  =>{return (<li key={key}> <Link to={`/detail/${key}`}> {label}</Link></li>)}
      const list= products.map((p) => makeItem(p._id, p.title));

    //  console.log(list);

    return (
        <>
        <Edit onUpdate={refresh} mode={props.mode } rid={props.rid}></Edit>
            <h2> All Products</h2>
        
        <ul>    
            
            {list} </ul>
            {!done ?  <Spinner animation="border" ></Spinner>: ""}
          </>
              )
}

export default List;