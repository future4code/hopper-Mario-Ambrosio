import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
text-align: center;
max-height: 900px;
min-height: 500px;
position: relative;
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

export const BotaoPrimario = styled.button`
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
cursor: pointer;

&:hover{
  color: black;
  background: #00ff00;
}
`;

export const ContainerDeViagem = styled.div`
display: flex;
flex-direction: column;
`;

export const Lista = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 border: 1px solid white;
 width: 50vw;
height: 10vh;
padding: 15px;

margin: 10px;
border-radius: 50px;
color: white;

box-shadow: 5px 5px 10px #cccccc;
text-indent: 10px;
cursor: pointer;
&:hover{
  color: black;
  background: #cccccc;
}
`;

export const BotaoDelete = styled.button`
border: 0;
background: transparent;


> img {
background: transparent;
border: 2px solid transparent;
height: 30px;
width: 30px;
border-radius: 70px;
cursor: pointer;
}

img:hover {
  border: 2px solid red;
  background: red;
}
`;