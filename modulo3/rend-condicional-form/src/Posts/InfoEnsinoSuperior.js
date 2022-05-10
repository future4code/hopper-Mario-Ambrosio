import React from 'react'
import '../estiloDaPagina.css'


class InfoEnsinoSuperior extends React.Component {


    render() {

        return (
            <>
                <div className='Estilo'>
                    <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                    <p>5. Qual curso?</p>
                    <input/>

                    <p>6. Qual a unidade de ensino?</p>
                    <input/>
                    <br />
                    <br />

                    <button onClick={this.props.onClickIGE}>Próxima Etapa</button>
                </div>
            </>
        );

    }
}
export default InfoEnsinoSuperior