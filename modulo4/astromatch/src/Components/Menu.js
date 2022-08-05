import axios from "axios"
import React, { useState, useEffect } from "react"

function Menu(props) {

  useEffect(()=>{
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:${props.usuario}/matches`)
    .then((response)=>{
      props.setArrayDeMatch(response.data.profile)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <>
      <div className="Menu">
        <div className="Funcionalidades">
          <button className="BotaoMenu">USUARIO</button>
          <button className="BotaoMenu">CONTAS CURTIDAS</button>
        </div>

        {props.ListaDeMatch.map((match) => {
          return (
          <div className="ListaDeMatch">
            <img src={match.photo} alt=""  className="ImgDaListaDeMatch"/>
            <h4>{match.name}</h4>
          </div>)
        })}

      </div>
    </>
  );
}
export default Menu;