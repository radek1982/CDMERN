import React, {useEffect, useState} from 'react';


const Pokemon = (props) => {

    const API = "https://pokeapi.co/api/v2/pokemon?limit=807";
    const [pokemon, setPokemon] = useState([])
    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }, []);

    const capitalize=(s) => s.charAt(0).toUpperCase() + s.slice(1)
 
    return (<div> 

        <h1> Pokemon</h1>
        <ol>
            {pokemon.length>0 && pokemon.map((p, i) => (<li key={i}>
                {capitalize(p.name)}
            </li>))}
        </ol>
        </div>)
}

export default Pokemon