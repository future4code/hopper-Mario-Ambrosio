import React from 'react'
import styled from 'styled-components'
import './App.css'

const TarefaList = styled.ul`
  padding: 0;
`

const Tarefa = styled.li`
  text-align: center;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
 justify-content: center;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(), // Explicação abaixo
          texto: 'Maçã',
          completa: false // Indica se a tarefa está completa (true ou false)
        },
        {
          id: Date.now(), // Explicação abaixo
          texto: 'Pão',
          completa: false // Indica se a tarefa está completa (true ou false)
        }
      ],
      inputValue: "",
      filtro: ""
    }

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas));
  };

  componentDidMount() {
    const transfString = localStorage.getItem("tarefas");

      if (transfString) {
        const tarefas = JSON.parse(transfString);

        this.setState({ tarefas });
      }
  };

  pegarInfo = () => {
    const tarefaLS = localStorage.getItem("tarefa")

    this.setState ({ 
      tarefas: tarefaLS
      })
  }


  onChangeInput = (e) => {
    this.setState({inputValue: e.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(), 
      texto: this.state.inputValue,
      completa: false 
    }
    const tarefaNova =  [novaTarefa, ...this.state.tarefas]

    this.setState({tarefas: tarefaNova, })
    this.setState({inputValue: ""})
  }

  selectTarefa = (id) => {
    const filtrarTarefas = this.state.tarefas.map ((tarefas) => {
      if(id == tarefas.id){
        const novaTarefa = {
          ...tarefas,
          completa: !tarefas. completa
        }
        return novaTarefa
      } else {
        return tarefas
      }
    })

    this.setState({tarefas: filtrarTarefas })
  }

  onChangeFilter = (e) => {
    this.setState({filtro: e.target.value})

  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
