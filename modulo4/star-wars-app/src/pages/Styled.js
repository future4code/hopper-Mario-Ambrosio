import styled from "styled-components";

export const Titulo = styled.h1`
font-size: 50px;
color: white;
border-bottom: 1px solid white;
margin-bottom: 30px;
text-align: center;
`

export const Personagens = styled.button`

font-size: 25px;
color: white;

padding: 20px;
border: 1px solid white;
margin: 10px;

cursor: pointer;

:hover{
  background-color: white;
  color: black;
}
`

export const Estilizacao = styled.div`
display: flex;
flex-direction: column;
`

export const Loading = styled.p`
color: white;
text-align: center;
font-size: 35px;
`

export const Texto = styled.div`
font-size: 25px;
color: white;
text-align: center;

> button {
  color:white;
  font-size: 20px;
  border: 1px solid white;
  margin-top: 50px;

  padding: 10px;
  border-radius: 10px;
  :hover {
    color: black;
    background-color: white;
  }
}
`