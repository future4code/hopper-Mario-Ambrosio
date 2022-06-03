import React, {useState, useEffect} from 'react'
import axios from 'axios'

function PokeCard(props){
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    PegaPokemon(props.pokemon)
  },[])

  


  const PegaPokemon = pokeName => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then((resp)=>{
      setPokemon(resp.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

useEffect(()=> {
  if(pokemon.name !== props.pokemon){
    PegaPokemon(props.pokemon)
  }
},[{PegaPokemon}])

  return(
    <>
    <p>{pokemon.name}</p>
    <p>{pokemon.weight} Kg</p>
    {pokemon.types  && <p>{pokemon.types[0].type.name}</p>}
    {pokemon.sprites && (
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    )}
    
    </>
  )
}
export default PokeCard;