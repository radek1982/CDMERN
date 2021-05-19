
import React, {useEffect, useState} from "react";
import axios from "axios";
import Edit from "./Edit";
import ProductTable from "./ProductTable"
import {Link} from "@reach/router";
import {Spinner, Table} from "react-bootstrap";
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


  
    return (
        <>
        <Edit onUpdate={refresh} mode={props.mode } rid={props.rid}></Edit>
            <h2> All Products</h2>
             
             <ProductTable products={products} notifyDelete={refresh}></ProductTable>
  

            {!done ?  <Spinner animation="border" ></Spinner>: ""}
          </>
              )
}

export default List;