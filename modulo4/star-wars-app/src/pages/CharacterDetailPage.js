import { useContext, useState, useEffect } from "react";
import { MyGlobal } from "../Global/MyGlobal";
import { DetalhesPersonagemCard } from "../componentes/DetalhesPersonagemCard"

import { Titulo, Estilizacao, Personagens, Loading } from "./Styled";

import axios from "axios";

export function CharacterDetailPage() {
  const { index, personagem, setPersonagem } = useContext(MyGlobal);
  const [planeta, setPlaneta] = useState([])
  const [nomePlaneta, setNomePlaneta] = useState("")

  const PegarDetalhesDoPersonagem = (id) => {
    axios.get(`https://swapi.dev/api/people/${id}/`)
      .then((response) => {
        // console.log(response.data)
        setPersonagem(response.data)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  useEffect(() => {
    PegarDetalhesDoPersonagem(index)
  }, [])

  useEffect(()=>{
    MostraPlaneta()
    Planeta(index)
  },)

  const MostraPlaneta = () => {
    axios.get(`https://swapi.dev/api/planets/`)
      .then((response) => {
        // console.log(response.data.results)
        setPlaneta(response.data.results)
      })
      .catch((error) => {
        console.log(error.response.data.message)
      })
  }

  const Planeta = (id) => {
    planeta.filter(obj => {
      if (obj.residents.indexOf(`https://swapi.dev/api/people/${id}/`) !== -1) {
        // console.log(obj)
        setNomePlaneta(obj)
      }
    })
  }



  return (

    <div>

      <Titulo>Star Wars</Titulo>
      {personagem.length === 0 && <Loading>Carregando...</Loading>}
      <DetalhesPersonagemCard perso={personagem} planeta={nomePlaneta}/>

    </div>
  );
}
