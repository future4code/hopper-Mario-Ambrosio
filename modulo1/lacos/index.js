//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//EX01 ------------------------------------------------------------------------------------
/* 
10
*/
//EX02 ------------------------------------------------------------------------------------
/* 
a) 19, 21, 23, 25, 27, 30

b) O for..of não informa o indice de um array, apenas os valores dentro dele, teriamos que
usar um for para consulta o indice de cada valores do array.
*/
//EX03 ------------------------------------------------------------------------------------
/* 
*
**
***
****
*/

//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//EX01 ------------------------------------------------------------------------------------
 const bichoDeEstimacao = prompt("Quantos bichinhos de estimação você tem ??")
 const arrayDeBichinho = []

//a)
 if (bichoDeEstimacao == 0) {
     console.log("Que pena! Você pode adotar um pet!")
 }else {
     for (let i=0 ; i< bichoDeEstimacao; i++){
         const nomeBichinho = prompt("Digite o nome do bichinho!")
         arrayDeBichinho.push(nomeBichinho)
     }
     console.log(arrayDeBichinho)
 }

 //EX02 ------------------------------------------------------------------------------------
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const novoArray = []
const arrayElemento = []
//a)
for(let num of arrayOriginal) {
     console.log(num)
 }
//b)
for(let num of arrayOriginal) {
     console.log(num / 10)
 }
//c)
for(let pares of arrayOriginal) {
      if(pares % 2 === 0){
          novoArray.push(pares)
      }
  }
  console.log(novoArray)
//d)
for(i = 0; i < arrayOriginal[i]; i++){
    const resultado = (`O elemento do índex ${i} é: ${arrayOriginal[i]}`)
    arrayElemento.push(resultado)
}
console.log(arrayElemento)
//e)
let maior = 0
let menor = maiorValor(arrayOriginal)
function maiorValor(arrayOriginal) {
    for (let valor of arrayOriginal ){
    if(valor > maior) {
        maior = valor;
    }
}
return maior
}
function menorValor(arrayOriginal) {
    for (let valor of arrayOriginal ){
    if(valor < menor) {
         menor = valor;
    }
}
return menor
}
const resultadoUm = maiorValor(arrayOriginal);
const resultadoDois = menorValor(arrayOriginal);
console.log(`O maior valor é ${resultadoUm} e o menor é ${resultadoDois}`)



//DESAFIO 

