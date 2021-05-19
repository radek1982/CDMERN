
import React from "react"
import {Table, ButtonGroup, Button} from "react-bootstrap"
import {Link, navigate}  from "@reach/router"
import Delete from "./Delete"


const Actions =(props) => {

        const id = props.rid;

    return (  <ButtonGroup aria-label="Basic example">
    <Button variant="secondary" onClick={() => navigate(`/detail/${id}`)
    }>Details</Button>
    <Button variant="success"  onClick={() => navigate(`/edit/${id}`)}>Edit</Button>
    <Delete button={true} rid={id}></Delete>
    </ButtonGroup>
  )
}
const ProductTable = (props) => {
   
    
    const products = props.products;

    const mapped = products.map((p) => 
    (<tr key={p._id}><td><Link to={`/detail/${p._id}`}>{p.title}</Link></td><td>{p.price}</td><td>{p.description}</td><td>
  <Actions rid={p._id}></Actions>
  </td></tr>))
    return (<Table  striped bordered hover>
        <thead>
            <tr><th>Title</th><th>Price</th><th>Description</th><th>Actions</th></tr>
        </thead>
        <tbody>
            {mapped}

        </tbody>
         </Table>)


}

export default ProductTable