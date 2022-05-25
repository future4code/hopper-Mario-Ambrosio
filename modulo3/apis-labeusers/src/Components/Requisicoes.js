import React from 'react'

class Requisicoes extends React.Component {
  render() {
    return (
      <>
        <div>
          <h1>CADASTRO DE USUÁRIOS</h1>
        </div>
        <div>
          <h3>Email</h3>
          <input type="text" 
          value={this.props.email}
          onChange={this.props.OnChangeEmail}/>

          <br />
          <br />

          <h3>Nome</h3>
          <input type="text" 
          value={this.props.name}
          onChange={this.props.OnChangeName}/>
        </div>

        <div>
          <br />
          <button onClick={this.props.EnviarFormulario}>Enviar Formulario</button>
          <br />
          <button onClick={this.props.ListaDeUsuarios}>Lista De Usuários</button>
        </div>
      </>
    )
  }
}

export default Requisicoes
