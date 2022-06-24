import styled from "styled-components";

export const Container = styled.div `
display: flex;
flex-direction: column;
text-align: center;

max-height: 900px;
min-height: 500px;
position: relative;
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

export const DescriçãoDaLista = styled.div `
box-shadow: 5px 5px 10px #cccccc;
margin: 10px;

> strong {
display: flex;
justify-content: center;

color: #00FF00;

text-indent: 10px;
margin: 10px;
}
`;

export const Paragrafo = styled.p`
color: white;
`;

export const Lista = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 border: 1px solid white;
 width: 70vw;
height: 35vh;
padding: 15px;

margin: 10px;
border-radius: 50px;
color: white;
text-align: justify;

box-shadow: 5px 5px 10px #cccccc;
text-indent: 0px;
> strong {
  text-align: center;
  color: #00FF00;
}
`;

export const Aprovados = styled.div`
border: 3px solid #00ff00;
border-radius: 70px;
background: #00ff00;
margin: 20px
`;