import React, {useEffect, useState} from 'react';
import axios from "axios";


const Pokemon = (props) => {

    const API = "https://pokeapi.co/api/v2/pokemon?limit=807";
    const [pokemon, setPokemon] = useState([])
    const [showList, setShowList] = useState(false);
        
    useEffect(() => {
        axios.get(API)
            .then(response => setPokemon(response.data.results))
    }, []);



    const capitalize=(s) => s.charAt(0).toUpperCase() + s.slice(1)
 
    return (<div> 

        <h1> Pokemon</h1>
        <button onClick={(e) => {
            setShowList(true);

        }}> Fetch Pokemon </button>
        <ol>
            {showList && pokemon.length>0 && pokemon.map((p, i) => (<li key={i}>
                {capitalize(p.name)}
            </li>))}
        </ol>
        </div>)
}

export default Pokemon