import React, { useEffect, useState } from "react";
import { Container, BotaoPrimario, Botoes, Inputs } from "./Styled"
import {useNavigate} from "react-router-dom"
import Api from "../configApi"

export function LoginPage() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const navigate = useNavigate()

  const OnChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const OnChangeSenha = (e) => {
   setSenha(e.target.value) 
  }
  const OnClickLogin = () => {
    Login()
  }

  const Login = async() => {
    const body = {
      email: email,
      password: senha
    }
    try{
      const resp = await Api.post("/login", body,)
      localStorage.setItem("token", resp.data.token)
      navigate("/AreaDoAdmin")
    }
    catch(err){
      console.log(err.resp.message)
    }
  }

  return (
    <>
      <Container>

        <h1>LOGIN</h1>

        <Inputs>
        <input type="email" 
        placeholder="Email"
        value={email} 
        onChange={OnChangeEmail}
         required
         />
        <input type="password"
         placeholder="Senha"
        value={senha} 
        onChange={OnChangeSenha}
        required/>
        </Inputs>

        <Botoes>
          <BotaoPrimario onClick={() => navigate("/")}>VOLTAR</BotaoPrimario>
          <BotaoPrimario onClick={OnClickLogin}>LOGAR</BotaoPrimario>
        </Botoes>

      </Container>
    </>
  )
}