import React from "react"
import styled from "styled-components"
import DadosGerais from "./Posts/DadosGerais"
import InfoEnsinoSuperior from "./Posts/InfoEnsinoSuperior"
import InfoGeraisDeEnsino from "./Posts/InfoGeraisDeEnsino"
import FinalDoFormulario from "./Posts/FinalDoFormulario"

class App extends React.Component {

  state = {
    pagina: "DadosGerais"
  }

  IES = () => {
    this.setState({ pagina: "InfoEnsinoSuperior" })
  }

  IGE = () => {
    
    this.setState({ pagina: "InfoGeraisDeEnsino" })
  }

  FDF = () => {
    this.setState({ pagina: "FinalDoFormulario" })
  }


  render() {
    let paginaVisual;

    switch (this.state.pagina) {
      case "DadosGerais":
        paginaVisual = <DadosGerais onClickIES={this.IES} />
        break;

      case "InfoEnsinoSuperior":
        paginaVisual = <InfoEnsinoSuperior onClickIGE={this.IGE} />
        break;

      case "InfoGeraisDeEnsino":
        paginaVisual = <InfoGeraisDeEnsino onClickFDF={this.FDF} />
        break;

      case "FinalDoFormulario":
        paginaVisual = <FinalDoFormulario />
        break;

      default:
        break;
    }
    return (
      <>
        {paginaVisual}
      </>
    );

  }
}

export default App;
