import React , {useState,useEffect} from 'react';
import './Pokemon.css';

const Pokemon = () => {

    const [pokemon,setPokemon]=useState([]);
    const onClick = () =>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(respuesta=>{
            return respuesta.json()
        })
        .then(respuesta=>{
            console.log(respuesta.results);
            setPokemon(
                respuesta.results
            )
        })
    
    }

    return (
        <div>
            <button onClick={onClick}>Fetch Pokemons</button>
            <ul className="pokemons">
                {pokemon.map((pokemon,indice)=>{
                    return (<li key={indice}> {pokemon.name} </li>)
                })
            }
            </ul>
        </div>
    );
}

export default Pokemon;