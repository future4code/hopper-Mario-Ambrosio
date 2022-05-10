import React from 'react'
import '../estiloDaPagina.css'


class InfoGeraisDeEnsino extends React.Component {

    render(){

        return (
            <>
                <div className='Estilo'>
                    <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                    <p>7. Por que você não terminou um curso de graduação?</p>
                    <input/>

                    <p>8. Você fez algum curso complementar?</p>
                    <select name="select" id="">
                        <option value="">Nenhum</option>
                        <option value="">Curso técnico</option>
                        <option value="">Curso de inglês</option>
                    </select>
                    <br />
                    <br />

                    <button onClick={this.props.onClickFDF}>Próxima Etapa</button>
                </div>
            </>
        );

    }
}
export default InfoGeraisDeEnsino