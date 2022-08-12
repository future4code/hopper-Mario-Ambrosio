//-------------------------------- Questão A --------------------------------------

let minhaString: string = 'Hello';
// minhaString = 10; 

//ELE NÃO ACEITA POIS ESSA VARIAVEL FOI SETADA PARA RECEBE APENAS STRING


//-------------------------------- Questão B --------------------------------------
let meuNumero: number | string = 10;
meuNumero = "Dez" 

//USAMOS O (|) PARA ATRIBUIR OUTRO TIPO DE PROPRIEDADE QUE ESSA VARIAVEL TAMBÉM PODERÁ ACEITA

//-------------------------------- Questão C --------------------------------------
type Pessoa = {
  nome: string,
  idade: number,
  corFavorita: Color
}

//-------------------------------- Questão D --------------------------------------
enum Color {
  VERMELHO = 'Vermelho',
  LARANJA = 'Laranja',
  AMARELO = 'Amarelo',
  VERDE = 'Verde',
  AZUL = 'Azul',
  ANIL = 'Anil',
  VIOLETA = 'Violeta'
}

const user1: Pessoa = {
  nome: 'Mario',
  idade: 20,
  corFavorita: Color.AMARELO
}
const user2: Pessoa = {
  nome: 'Maria',
  idade: 25,
  corFavorita: Color.ANIL
}
const user3: Pessoa = {
  nome: 'Carla',
  idade: 5,
  corFavorita: Color.VIOLETA
}


