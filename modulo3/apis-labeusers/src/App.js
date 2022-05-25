import React from 'react'
import Requisicoes from './Components/Requisicoes';
import ListaDeUsuarios from './Components/ListaDeUsuarios';
import './App.css';
import axios from 'axios';


class App extends React.Component {
  //ESTADOS
  state = {

    email: '',
    name: '',
    lista: [],
    paginas: 'CadastroDeUsuarios'
  }

  //BOTÕES
  OnChangeEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  OnChangeName = (e) => {
    this.setState({ name: e.target.value })
  }

  OnClickListaDeUsuarios = () => {
    this.setState({ paginas: 'ListaDeUsuarios' })
  }

  OnClickCadastro = () => {
    this.setState({ paginas: 'CadastroDeUsuarios' })
  }
  // CRIAÇÃO DE USUARIOS
  CriarUsuario = () => {
    const body = {
      name: this.state.name,
      email: this.state.email
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
      headers: {
        Authorization: "mario-ambrosio-hopper"
      }
    })
      .then(() => {
        alert("Usuário criado com sucesso")
        this.setState({ email: "" })
        this.setState({ name: "" })
      })
      .catch((error) => {
        alert( error.response.data.message)
      })
  }

  //LISTA DE USUARIOS
  PuxarUsuarios = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
      headers: {
        Authorization: "mario-ambrosio-hopper"
      }
    })
      .then((resp) => {
        this.setState({ lista: resp.data })
      })
      .catch((error) => {
        alert( error.response.data.message)
      })
  }

  //DELETA USUARIOS
  deletaUsuarios = (id) => {

    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
      headers: {
        Authorization: "mario-ambrosio-hopper"
      }
    })
      .then(() => {
        this.PuxarUsuarios()
        alert("Usuário deletado com sucesso")
      })
      .catch((error) => {
        alert( error.response.data.message)
      })
  }

  render() {

    const Lista = this.state.lista.map((listUser, chave) => {
      return <div key={chave}>
        <h3>{listUser.name}
          <button onClick={() => this.deletaUsuarios(listUser.id)}>Delete</button></h3>
      </div>
    })

    const idDoUsuario = this.state.lista.filter((idUser) => {
      return idUser.id
    })

    let paginas;

    switch (this.state.paginas) {
      case "CadastroDeUsuarios":
        paginas = <Requisicoes
          name={this.state.name}
          OnChangeName={this.OnChangeName}
          email={this.state.email}
          OnChangeEmail={this.OnChangeEmail}
          EnviarFormulario={this.CriarUsuario}
          ListaDeUsuarios={this.OnClickListaDeUsuarios}
        />
        break;

      case "ListaDeUsuarios":
        paginas = <ListaDeUsuarios
          list={Lista}
          Cadastro={this.OnClickCadastro}
          PuxarUsuarios={this.PuxarUsuarios} />
        break;
    }

    return (
      <>
        {paginas}
      </>
    )
  }
}

export default App;
