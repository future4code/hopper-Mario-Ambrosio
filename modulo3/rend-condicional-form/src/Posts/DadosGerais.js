import React from 'react'
import '../estiloDaPagina.css'


class DadosGerais extends React.Component {

    render(){

        return (
            <>
                <div className='Estilo'>
                    <h2>ETAPA 1 - DADOS GERAIS</h2>
                    <p>1. Qual o seu nome?</p>
                    <input/>

                    <p>2. Qual sua idade?</p>
                    <input/>

                    <p>3. Qual seu email?</p>
                    <input/>

                    <p>4. Qual a sua escolaridade? </p>
                    <select name="select" id="">
                        <option value="1">Ensino médio incompleto</option>
                        <option value="2">Ensino médio completo</option>
                        <option value="3">Ensino superior incompleto</option>
                        <option value="4">Ensino superior completo</option>
                    </select>
                    <br />
                    <br />

                    <button onClick={this.props.onClickIES}>Próxima Etapa</button>
                </div>
            </>
        );

    }
}
export default DadosGerais