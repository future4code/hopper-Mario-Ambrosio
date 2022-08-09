import { useNavigate } from "react-router-dom";
import { Texto } from "../pages/Styled";


export const DetalhesPersonagemCard = ({ perso, planeta }) => {
  const navigate = useNavigate()

  return (

    <div>
      <Texto>
        <p>Nome : {perso.name}</p>
        <p>Planeta De Origem: {planeta.name}</p>
        <button onClick={() => navigate("/")}>Voltar Para Tela Inicial</button>
      </Texto>
    </div>
  )
}