import React, { useState, useEffect } from "react"

function Layout(props) {
  return (
    <>
      <div className="Layout">
        <div className="ConteinerLogo">
          <h1 className="Logo">ASTROMATCH</h1>
        </div>

        <div className="ConteinerCentral">

          <div className="ConteinerTotal">
            <div className="ConteinerMatch">
              <img src={props.imagem} alt="" className="Img" />
              <div className="textoDiv">
                <h1>Olá, 20</h1>
                <p>Olá olá</p>
              </div>
            </div>
            <button className="BotoesMatch">ACEITA</button>
            <button className="BotoesMatch">RECUSAR</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Layout;