import { useState } from "react";
import { MyGlobal } from "./MyGlobal";

export const GlobalState = (props) =>{
  const [index, setIndex] = useState("")
  const [personagem, setPersonagem] = useState([])

  return <MyGlobal.Provider value={{ index, setIndex, personagem, setPersonagem }}>
    {props.children}
  </MyGlobal.Provider>
}