import React from 'react';

const Data = props => {
    const {state} = props;

    return (
            <ul> 
            <li> First: {state.first} </li>
            <li> Last: {state.last} </li>
            <li> Email: {state.email} </li>
            <li> Password: {state.password} </li>
            <li> Confirm:{state.confirm} </li>

            </ul>
               );
    }

export default Data;