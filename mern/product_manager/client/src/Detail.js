import React, {useEffect, useState} from "react"
import {Link} from "@reach/router"
import axios from "axios"
import { Spinner } from "react-bootstrap";


const Detail = props => {

    const id=props.rid;

    const [details, setDetails] = useState({})
    const [done, setDone] = useState(false)
    useEffect(() => {
    !done && axios.get("http://localhost:8000/api/products/" + id)
      .then((res) =>
      {
          setDetails(res.data.product);
      }).then(() => setDone(true))},[done,id]);



    return(
    <>
    <h2>Details</h2>
    <dl>
    <dt> Title: </dt> <dd> {details.title} </dd>
    <dt>Price:</dt> <dd>{details.price}</dd>
    <dt>Description: </dt> <dd>{details.description}</dd>
    </dl>
    <Link to="/" className="btn btn-primary">Back</Link>
    <Link to="/edit" className="btn btn-success">Edit</Link>
    <Link to="/delete/" className="btn btn-danger">Delete</Link>
    {!done ?  <Spinner animation="border" ></Spinner>: ""}
    </>)
}

export default Detail