import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import PokeCard from './PokeCard/PokeCard';

export default function App() {
  const [PokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        setPokeList(res.data.results)
      })
      .catch(() => {
      })
  }, [])

  const changePokeName = (e) => {
    setPokeName(e.target.value)
  }

  return (
    <>
      <select onChange={changePokeName}>
        <option value="">Nenhum</option>
        {PokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
          )
        })}
      </select>
      {pokeName && <PokeCard  pokemon={pokeName}/>}
    </>
  );
}
