import React from "react";
import { Container, BotaoPrimario, Botoes } from "./Styled"
import {useNavigate} from "react-router-dom"

export function HomePage() {
  const navigate = useNavigate()

  const OnClickAutorizado = () => {
    if("token" && localStorage.getItem("token")){
      navigate("/AreaDoAdmin")
    }else {
      navigate("/Login")
    }
  }

  return (
    <>
      <Container>

        <h1>LABEX</h1>

        <Botoes>
          <BotaoPrimario onClick={() => navigate("/ListaDeViagens")}>VER VIAGEM</BotaoPrimario>
          <BotaoPrimario onClick={OnClickAutorizado}>ARÉA DO ADMIN</BotaoPrimario>
        </Botoes>

      </Container>
    </>
  )
}