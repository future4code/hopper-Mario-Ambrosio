import React from 'react'
import Axios from 'axios'

class Requisicoes extends React.Component {
  render() {
    return (
      <>
        <div>
          <h1>CADASTRO DE USUÁRIOS</h1>
        </div>
        <div>
          <h3>Email</h3>
          <input type="text" />

          <br />
          <br />

          <h3>Nome</h3>
          <input type="text" />
        </div>

        <div>
          <br />
          <button>Enviar Formulario</button>
          <br />
          <button>Lista De Usuários</button>
        </div>
      </>
    )
  }
}

export default Requisicoes
