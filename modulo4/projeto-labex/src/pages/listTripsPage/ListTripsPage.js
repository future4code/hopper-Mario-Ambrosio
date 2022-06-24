import React, { useEffect, useState } from "react";
import { Container, Botoes, BotaoPrimario, ListaViagem,ContainerViagem } from "./Styled"
import Api from "../configApi"
import {useNavigate } from "react-router-dom"

export function ListTripsPage() {
  const [listaDeViagens, setListaDeViagens] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    ArrayDeViagens()
  }, [])

  const ArrayDeViagens = async () => {
    try {
      const resp = await Api.get("/trips")
      setListaDeViagens(resp.data.trips)
    }
    catch (err) {
      console.log(err)
    }
  }

  const Viagens = listaDeViagens.map((viagem) => {
    return <ListaViagem key={viagem.id}>
      <strong>Nome:
        <span> {viagem.name}</span>
        </strong> 
      <strong>Descrição:
      <span> {viagem.description}</span>
      </strong>
      <strong>Planeta:
      <span> {viagem.planet}</span>
      </strong>
      <strong>Duração:
      <span> {viagem.durationInDays}</span>
      </strong>
      <strong>Data:
      <span> {viagem.date}</span>
      </strong>
    </ListaViagem>
  })

  return (
    <>
      <Container>

        <Botoes>
          <BotaoPrimario onClick={() => navigate("/")}>VOLTAR</BotaoPrimario>
          <BotaoPrimario onClick={() => navigate("/CadastroDeViagem")}>INSCREVE-SE</BotaoPrimario>
        </Botoes>

        <h1>LISTA DE VIAGENS</h1>

          {Viagens}

      </Container>
    </>
  )
}