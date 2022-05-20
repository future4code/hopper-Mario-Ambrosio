import React from 'react'

class ListaDeUsuarios extends React.Component {

  componentDidMount() {
    this.props.PuxarUsuarios()
  }

  render() {
    return (
      <>
      {this.props.list}
      <button onClick={this.props.Cadastro}>Cadastro De Usuários</button>
      </>
    )
  }
}

export default ListaDeUsuarios