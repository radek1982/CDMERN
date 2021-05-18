import React, {useEffect, useState} from "react"
import {Link,navigate} from "@reach/router"
import axios from "axios"
import { Spinner,Button } from "react-bootstrap";
import APIEndpoints from "./Config";


const Detail = props => {

    const id=props.rid;

    const [details, setDetails] = useState({})
    const [done, setDone] = useState(false)
    useEffect(() => {
    !done && axios.get(APIEndpoints.detail(id))
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
    <Link to={`/edit/${id}`} className="btn btn-success">Edit</Link>
    <Button variant="danger" onClick={(e) => {
      setDone(false);
      axios.delete(APIEndpoints.delete(id)).then((r) => {
         navigate("/")})
    }}>Delete</Button>
    {!done ?  <Spinner animation="border" ></Spinner>: ""}
    </>)
}

export default Detail