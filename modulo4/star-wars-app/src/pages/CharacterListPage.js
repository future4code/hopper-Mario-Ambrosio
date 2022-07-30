import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { Titulo, Estilizacao, Personagens, Loading } from "./Styled"
import { MyGlobal } from "../Global/MyGlobal";

export default function CharacterListPage() {
  const navigate = useNavigate()

  const [personagens, setPersonagens] = useState([])
  const { setIndex, setFilms } = useContext(MyGlobal);

  const PegarLista = () => {
    axios.get(`https://swapi.dev/api/people/`)
      .then((response) => {
        // console.log(response.data.results)
        setPersonagens(response.data.results)
      })
      .catch((error) => {
        alert(error.response.data.message)
      })
  }

  useEffect(() => {
    PegarLista()
  }, [])

  const OnClickDetalhes = (id) => {
    navigate("/Detalhes")
    setIndex(id + 1)
  }


  return (
    <>
      <Estilizacao>

        <Titulo>Lista De Personagens</Titulo>
        {personagens.length === 0 && <Loading>Carregando...</Loading>}
        {personagens && personagens.map((perso, id) => {
          return (
            <Personagens key={id} onClick={() => OnClickDetalhes(id)}>
              {perso.name}
            </Personagens>
          )
        })}

      </Estilizacao>
    </>
  );
}