import React from 'react';
import { useEffect } from 'react';
import "./Pokemon.css";


const Pokemon = () => {

    const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

    const fetchPokemon = async() =>{
        try {
           const res = await fetch(API);
           const data = await res.json();
           //console.log(data);

           const pokemonData = data.results.map(async (currData)=>{
                const res = await fetch(currData.url);
                const data = await res.json();
                //console.log(data);
                return data;
                
           })
           
        } catch (error) {
            console.log(error);

            
        }
    }
    
    useEffect(()=>{
        fetchPokemon();
    },[]);
   

    
    return (
        <>
            <section className="container">
                <header>
                    <h1>Lets Catch Pokemon</h1>
                </header>
                <div className="pokemon-search">
                    <input type="text" placeholder='Search Pokemon' />
                </div>
                {/*------- Card ----------*/}
                <div className="cards">

                </div>
            </section>
        </>
    )
}

export default Pokemon
