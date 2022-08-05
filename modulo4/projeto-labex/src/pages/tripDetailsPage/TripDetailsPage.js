import React, { useEffect, useState } from "react";
import { Container, BotaoPrimario,Aprovados ,Botoes, DescriçãoDaLista, Paragrafo, Lista } from "./Styled"
import { useNavigate } from "react-router-dom"
import Api from "../configApi"

export function TripDetailsPage() {
  const [dadosDaArray, setDadosDaArray] = useState([])
  const [candidatos, setCandidatos] = useState([])
  const [aprovados, setAprovados] = useState([])
  const [idDoCanditato, setIdDoCanditato] = useState("")
  const navigate = useNavigate()

  const OnClickVoltar = () => {
    navigate("/AreaDoAdmin")
    localStorage.removeItem("ChaveId")
  }

  useEffect(() => {
    PegarDadosDaViagem()
  }, [])

  const ReprovarCandidato = async (Id)=> {
    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      }
    }
    const body = {
      approve: false
    }

    try {
      const resp = await Api.put(`/trips/${localStorage.getItem("ChaveId")}/candidates/${Id}/decide`, body, headers)
      console.log(resp.data)
      PegarDadosDaViagem()
    }
    catch (err) {
      console.log(err.resp.message)
    }
  }


  const AprovarCandidato = async (Id) => {
    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      }
    }
    const body = {
      approve: true
    }

    try {
      const resp = await Api.put(`/trips/${localStorage.getItem("ChaveId")}/candidates/${Id}/decide`, body, headers)
      console.log(resp.data)
      PegarDadosDaViagem()
    }
    catch (err) {
      console.log(err.resp.message)
    }
  }

  const PegarDadosDaViagem = async () => {
    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      }
    }

    try {
      const resp = await Api.get(`/trip/${localStorage.getItem("ChaveId")}`, headers)
      setDadosDaArray(resp.data.trip)
      setCandidatos(resp.data.trip.candidates)
      setAprovados(resp.data.trip.approved)
    }
    catch (err) {
      console.log(err.resp)
    }
  }

  return (
    <>
      <Container>

        <h1>{dadosDaArray.name}</h1>

        <DescriçãoDaLista>
          <strong>Nome: <Paragrafo>{dadosDaArray.name}</Paragrafo></strong>
          <strong>Descrição: <Paragrafo>{dadosDaArray.description}</Paragrafo></strong>
          <strong>Planeta: <Paragrafo>{dadosDaArray.planet}</Paragrafo></strong>
          <strong>Duração: <Paragrafo>{dadosDaArray.durationInDays}</Paragrafo></strong>
          <strong>Data: <Paragrafo>{dadosDaArray.date}</Paragrafo></strong>
        </DescriçãoDaLista>

        <Botoes>
          <BotaoPrimario onClick={OnClickVoltar}>Voltar</BotaoPrimario>
        </Botoes>

        <h1>CANDIDATOS</h1>
        {candidatos && candidatos.map((candidato) => {
          return <Lista key={candidato.id} value={candidato.id}>
            <strong>Nome: <Paragrafo>{candidato.name.nome}</Paragrafo></strong>
            <strong>Profissão: <Paragrafo>{candidato.profession.profissao}</Paragrafo></strong>
            <strong>Idade: <Paragrafo>{candidato.age.idade}</Paragrafo></strong>
            <strong>País: <Paragrafo>{candidato.country.cidade}</Paragrafo></strong>
            <strong>Texto De Candidatura: <Paragrafo>{candidato.applicationText.motivo}</Paragrafo></strong>
            <BotaoPrimario onClick={() => AprovarCandidato(candidato.id)}>Aprovar</BotaoPrimario>
            <BotaoPrimario onClick={() => ReprovarCandidato(candidato.id)}>Reprovar</BotaoPrimario>
          </Lista>
        })}

        <h1>APROVADOS</h1>
        {aprovados && aprovados.map((aprovados) => {
          return <Aprovados key={aprovados.id}>
            <Lista >
            <strong>Nome: <Paragrafo>{aprovados.name.nome}</Paragrafo></strong>
            <strong>Profissão: <Paragrafo>{aprovados.profession.profissao}</Paragrafo></strong>
            <strong>Idade: <Paragrafo>{aprovados.age.idade}</Paragrafo></strong>
            <strong>País: <Paragrafo>{aprovados.country.cidade}</Paragrafo></strong>
            <strong>Texto De Candidatura: <Paragrafo>{aprovados.applicationText.motivo}</Paragrafo></strong>
          </Lista>
          </Aprovados>
        })}

      </Container>
    </>
  )
}