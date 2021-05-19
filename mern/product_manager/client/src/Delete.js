import React from "react"
import axios from "axios";
import {navigate} from "@reach/router"
import {Button} from "react-bootstrap"
import APIEndpoints from "./Config"

const Delete = (props) => {
    const id=props.rid;
    const nav =props.nav || true;
    const goto = props.goto || "/"
    const handler = () => {
        axios.delete(APIEndpoints.delete(id)).then((r) => {
            console.log(nav);
            nav && navigate(goto) 

        })
    };
    const showButton = props.button || false

    if (!showButton) handler();
 
    return  (showButton && <Button variant="danger" disabled={!id} onClick={handler}>Delete</Button>)
}

export default Delete