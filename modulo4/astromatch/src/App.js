import Menu from './Components/Menu'
import Layout from './Components/Layout'
import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';

export default function App() {
const usuario = "Mario"
const [arrayDeUsuarios, setArrayDeUsuarios] = useState([])

const PegarMatches = (aluno) => {
  axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:${aluno}/person`)
  .then((response)=>{
    setArrayDeUsuarios(response.data.profile)
  })
  .catch((err)=>{
    console.log(err)
  })
}

useEffect(()=>{
  PegarMatches(usuario)
},[])

  return (
    <>
      <div className="Pagina">
        <Menu />
        <Layout
         imagem={arrayDeUsuarios.photo}
         />
      </div>
    </>
  );
}
