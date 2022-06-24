import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
text-align: center;

  > h1 {
    color: white;
    background: transparent;
    margin: 30px;
  }
`;

export const Botoes = styled.div`
display: flex;
justify-content: center;
`;

export const BotaoPrimario =styled.button`
display: flex;
flex-wrap: nowrap;
color: white;
background: transparent;
height: 30px;
width: 150px;
border: 1px solid #00ff00;
border-radius: 20px;
justify-content: center;
align-items: center;
margin: 10px;

&:hover{
  color: black;
  background: #00ff00;
}
`;

export const ListaViagem = styled.div`
display: flex;
flex-direction: column;

border: 2px solid white;
border-radius: 10px;
margin: 10px;
text-align: justify;

box-shadow: 10px 10px #00ff00;

> strong {
  margin: 10px;
  color: #00ff00;
  background: transparent;
  > span {
  color: white;
  text-decoration: underline white;
  background: transparent;
}
}

`;
