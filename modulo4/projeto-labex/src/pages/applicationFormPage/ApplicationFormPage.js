import React, { useEffect, useState } from "react";
import { Container, Botoes, BotaoPrimario, Inputs } from "./Styled"
import Api from "../configApi"
import { Paises } from "./Paises"
import { useNavigate } from "react-router-dom"

export function ApplicationFormPage() {
  const [viagem, setViagem] = useState([])
  const navigate = useNavigate()

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [motivo, setMotivo] = useState("")
  const [profissao, setProfissao] = useState("")
  const [cidade, setCidade] = useState("")
  const [idViagem, setIdViagem] = useState("")


  // TODOS OS ONCHANGES
  const OnChangeNome = (e) => {
    setNome(e.target.value)
  }
  const OnChangeIdade = (e) => {
    setIdade(e.target.value)
  }
  const OnChangeMotivo = (e) => {
    setMotivo(e.target.value)
  }
  const OnChangeProfissao = (e) => {
    setProfissao(e.target.value)
  }
  const OnChangePais = (e) => {
    setCidade(e.target.value)
  }
  const OnChangeIdViagem = (e) => {
    setIdViagem(e.target.value)
  }
  // 

  useEffect(() => {
    NomeDaViagem()
  }, [])


  const NomeDaViagem = async () => {
    try {
      const resp = await Api.get("/trips")
      setViagem(resp.data.trips)
    }
    catch (err) {
      console.log(err.response)
    }
  }

  const OnClickEnviar = () => {
    CriarInscricao()
  }

  const CriarInscricao = async () => {
    const body = {
      name: { nome },
      age: { idade },
      applicationText: { motivo },
      profession: { profissao },
      country: { cidade }
    }

    try {
      if (nome !== "" && idade !== "") {
        if (motivo !== "" && profissao !== "") {
          if (cidade !== "") {
            const resp = await Api.post(`trips/${idViagem}/apply`, body)
            console.log(resp.data)
          }
        }
      } else {
        alert("Algum item não foi digitado")
      }
    }
    catch (err) {

    }
  }

  // MAPS DA PAGINA
  const FiltroDeViagem = viagem.map((viagem) => {
    return <option value={viagem.id} key={viagem.id}>
      {viagem.planet}
    </option>
  })

  const PaisesFiltrados = Paises.map((pais) => {
    return <option key={pais} value={pais} >{pais}</option>
  })


  return (
    <>
      <Container>
        <h1>INSCREVA-SE PARA UMA VIAGEM</h1>
        <Inputs>

          <select onChange={OnChangeIdViagem}>
            <option value="">Escolha Uma Viagem</option>
            {FiltroDeViagem}
          </select>

          <input type="text"
            placeholder="Nome"
            value={nome}
            onChange={OnChangeNome}
            required
            pattern={"^.{3,}"}
            title={"O nome deve ter no mínimo 3 letras"} />

          <input type="number"
            placeholder="Idade"
            value={idade}
            min="18"
            max="100"
            onChange={OnChangeIdade}
            required />

          <input type="text"
            placeholder="Texto De Candidatura"
            value={motivo}
            onChange={OnChangeMotivo} 
            required
            pattern={"^.{30,}"}
            title={"O texto deve ter no mínimo 30 letras"} 
            />

          <input type="text"
            placeholder="Profissão"
            value={profissao}
            onChange={OnChangeProfissao} 
            required/>

          <select onChange={OnChangePais}>
            <option value="">Escolha Um País</option>
            {PaisesFiltrados}
          </select>

        </Inputs>

        <Botoes>
          <BotaoPrimario onClick={() => navigate("/ListaDeViagens")}>VOLTAR</BotaoPrimario>
          <BotaoPrimario onClick={OnClickEnviar}>ENVIAR</BotaoPrimario>
        </Botoes>
      </Container>
    </>
  )
}