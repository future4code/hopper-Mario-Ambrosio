import Menu from './Components/Menu'
import Layout from './Components/Layout'
import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';

export default function App() {
const usuario = "Mario"
const [arrayDeUsuarios, setArrayDeUsuarios] = useState([])
const [arrayDeMatch, setArrayDeMatch] = useState([
  {
    id: "2LAsTKPOVs3tavH6ga6v",
    photo: "https://static.ndmais.com.br/2019/07/P-15-Texto-1-Foto-1-Anitta-533x800.jpg",
    name: "Anitta",
    age: 26,
    bio: "Amo cachorros e sair para dançar. Procuro alguém animado e sem neuras.",
    photo_alt: "Morena, cabelo longo castanho liso, vestindo blusa e calça branca. Ela se encontra em pé de braços cruzados em frente a um fundo cinza."
}
])

const PegarMatches = (aluno) => {
  axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:${aluno}/person`)
  .then((response)=>{
    setArrayDeUsuarios(response.data.profile)
  })
  .catch((err)=>{
    console.log(err)
  })
}

const MatchTodos = () => {
  axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:${usuario}/matches`)
  .then((response)=>{
    setArrayDeMatch(response.data.profile)
  })
  .catch((err)=>{
    console.log(err)
  })
}

const DarMatch = () => {
  const body = {
    id: arrayDeUsuarios.id,
    choice: true
  }

  axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:${usuario}/choose-person`, body)
}

const DarDesMatch = () => {
  const body = {
    id: arrayDeUsuarios.id,
    choice: false
  }

  axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:${usuario}/choose-person`, body)
}
useEffect(()=>{
  PegarMatches(usuario)
},[])



  return (
    <>
      <div className="Pagina">
        <Menu 
        ListaDeMatch={arrayDeMatch}
        usuario={usuario}
        />
        <Layout
         imagem={arrayDeUsuarios.photo}
         bio={arrayDeUsuarios.bio}
         age={arrayDeUsuarios.age}
         name={arrayDeUsuarios.name}

         DarMatch={DarMatch}
         DarDesMatch= {DarDesMatch}
         />
      </div>
    </>
  );
}
