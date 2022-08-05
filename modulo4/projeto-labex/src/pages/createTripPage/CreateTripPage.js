import React, { useState } from "react";
import { Container, BotaoPrimario, Botoes, Inputs } from "./Styled"
import { useNavigate } from "react-router-dom"
import { Planetas } from "./ArrayPlanetas"
import Api from "../configApi"


export function CreateTripPage() {
  const navigate = useNavigate()

  // ESTADOS
  const [name, setName] = useState("")
  const [planet, setPlanet] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [durationInDays, setDurationInDays] = useState("")

  // ONCHANGES
  const OnChangeName = (e) =>{
    setName(e.target.value)
  }
  const OnChangePlanet= (e) =>{
    setPlanet(e.target.value)
  }
  const OnChangeDate = (e) =>{
    setDate(e.target.value)
  }
  const OnChangeDescription = (e) =>{
    setDescription(e.target.value)
  }
  const OnChangeDuration = (e) =>{
    setDurationInDays(e.target.value)
  }



  const CriarViagem = async () => {
    const body = {
      name,
      planet,
      date,
      description,
      durationInDays
    }
    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      }
    }
    try {
      const resp = await Api.post("/trips", body, headers)
      console.log(resp.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  const FiltroDePlanetas = Planetas.map((planetas, key) => {
    return <option value={planetas} key={key}>{planetas}</option>
  })

  return (
    <>
      <Container>

        <h1>CRIAR VIAGEM</h1>

        <Inputs>

          <input type="text"
            placeholder="Nome"
            value={name}
            onChange={OnChangeName} />

          <select onChange={OnChangePlanet}>
            <option value="-1">Escolha o planeta</option>
            {FiltroDePlanetas}
          </select>

          <input type="date" 
          value={date}
          onChange={OnChangeDate} />

          <input type="text"
            placeholder="Descrição" 
            value={description}
            onChange={OnChangeDescription}/>

          <input type="number"
            placeholder="Duração em dias"
            value={durationInDays}
            onChange={OnChangeDuration}/>

        </Inputs>

        <Botoes>
          <BotaoPrimario onClick={() => navigate("/AreaDoAdmin")}>VOLTAR</BotaoPrimario>
          <BotaoPrimario onClick={CriarViagem}>CRIAR</BotaoPrimario>
        </Botoes>

      </Container>
    </>
  )
}