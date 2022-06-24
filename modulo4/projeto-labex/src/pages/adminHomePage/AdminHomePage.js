import React, { useEffect, useState } from "react";
import { Container, BotaoPrimario, Botoes, ContainerDeViagem, Lista, BotaoDelete } from "./Styled"
import { useNavigate } from "react-router-dom"
import Api from "../configApi"

export function AdminHomePage() {
  const navigate = useNavigate()
  const [viagens, setViagens] = useState([])

  const OnClickLogout = () => {
    localStorage.removeItem("token")
    navigate("/Login")
  }
  const OnClickPegaId = (id) =>{
    localStorage.setItem("ChaveId", id)
    navigate("/DetalhesDaViagem")
  }

  useEffect(() => {
    PegarArrayDeViagem()
  }, [])

  const DeletaViagem = async(id) => {
    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      }
    }
    try{
      const resp = await Api.delete(`/trips/${id}`, headers)
      console.log(resp)
      PegarArrayDeViagem()
    }
    catch(err){
      console.log(err.resp)
    }
  }

  const PegarArrayDeViagem = async () => {
    try {
      const resp = await Api.get("/trips")
      setViagens(resp.data.trips)
    }
    catch (err){
      console.log(err)
    }
  }

  const FiltraDeViagens = viagens.map((viagem) => {
    return <Lista key={viagem.id} value={viagem.id} onClick={()=>OnClickPegaId(viagem.id)}>{viagem.name} <BotaoDelete  onClick={() => DeletaViagem(viagem.id)}><img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-delete-interface-dreamstale-lineal-dreamstale-2.png"/></BotaoDelete></Lista>
  })

  return (
    <>
      <Container>

        <h1>PAINEL ADMINISTRATIVO</h1>

        <Botoes>
          <BotaoPrimario onClick={() => navigate("/")}>VOLTAR</BotaoPrimario>
          <BotaoPrimario onClick={() => navigate("/CriarViagem")}>CRIAR VIAGEM</BotaoPrimario>
          <BotaoPrimario onClick={OnClickLogout}>LOGOUT</BotaoPrimario>
        </Botoes>

        <ContainerDeViagem>
          {FiltraDeViagens}
        </ContainerDeViagem>


      </Container>
    </>
  )
}