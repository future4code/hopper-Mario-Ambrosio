import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
text-align: center;

  > h1 {
    color: white;
    background: transparent;
    margin: 10px;
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

export const Inputs = styled.div`
display: flex;
flex-direction: column;

> input, select {
  height: 5vh;
  width: 30vw;
  margin:10px;

  border-radius: 10px;
  border: 1px solid white;
  
  color: white;
  text-indent: 10px;
}`;