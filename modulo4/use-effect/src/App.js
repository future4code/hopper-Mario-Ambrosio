import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const {pokeList, setPokeList} = useState([])
  const {pokeName, setPokeName} = useState("")

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then((resp)=>{    
      setPokeList(resp.data.results)
    })
    .catch((err)=>{
      console.log(err.data)
    })
  }, [])

    console.log(pokeList)
  return (
    <>

  <select>
    <option value="">Nenhum</option>

  </select>

    </>
  );
}

export default App;
