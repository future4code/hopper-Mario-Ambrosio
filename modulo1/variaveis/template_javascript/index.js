/* 1: O primeiro console.log irá exibir 10 e o segundo irá exibir 10, 5 */


/* 2: O valor que aparece no console.log será 10, 10, 10 */


/* 3: let horasTrabalhadas =
      let valorDiario =   */

//1.
//a)
let nome  
//b)
let idade 
//c)
console.log (typeof nome)
console.log (typeof idade)
//d) Esse tipo de variavel foi impressa pois eu não atribui valores as variaveis anterioras.
//e)
let nomeDoUsuario = prompt ("Digite seu nome:")
let idadeDoUsuario = prompt ("Digite sua idade:")
//f) Que assim que o valor da variavel foi colocado o tipo dessa apareceu.
console.log (typeof nomeDoUsuario)
console.log (typeof idadeDoUsuario)
//g)
console.log ("Olá", nomeDoUsuario, "você tem", idadeDoUsuario, "anos" )

//2.
//a)
const primeiraPergunta = prompt ("Você já tomou banho hoje ?")
const segundaPergunta = prompt ("Você já estudou hoje ?")
const terceiraPergunta = prompt ("Você sabe dirigir ?")
//b)
console.log ("Você já tomou banho hoje ?", primeiraPergunta)
console.log ("Você já estudou hoje ?", segundaPergunta)
console.log ("Você sabe dirigir ?", terceiraPergunta)

//3.
let valorA = 10
let valorB = 25
let valorC 

valorC = valorA
valorA = valorB
valorB = valorC

console.log ("O novo valor de A é :", valorA)
console.log ("O novo valor de B é :", valorB)


//Desafio
const primeiroNumero = Number(prompt ("Digite o primeiro número :"))
const segundoNumero = Number(prompt ("Digite o segundo número :"))

console.log ("1- O número", primeiroNumero,"Somado com o número", segundoNumero,"Ficará :", primeiroNumero + segundoNumero)
console.log ("2- O número", primeiroNumero,"Multiplicado com o número", segundoNumero,"Ficará :", primeiroNumero * segundoNumero)
