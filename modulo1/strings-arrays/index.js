//EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO

//EX 1 
/*
1. console.log imprimira undefined
2. console.log imprimira null
3. console.log imprimira 11
4. console.log imprimira 3
5. console.log imprimira [3,19,5,6,7,8,9,10,11,12,13]
6. console.log imprimira 9
*/

//EX 2
// O valor impresso será 27

//-------------------------------------------------------------------------------------------------------------
//EXERCÍCIO DE ESCRITA DE CÓDIGO

//EX 1
//const nomeUsuario = prompt("Digite seu nome!")
//const emailUsuario = prompt("Digite seu email!")

//console.log(`O e-mail ${emailUsuario.trim()} foi cadastrado com sucesso. Seja bem vinda(o), ${nomeUsuario}`)

//EX 2
const comidasPreferidas = ["feijoada", "stogonoff", "lasanha", "macarrao", "carneCozida"]

console.log(comidasPreferidas)

console.log("Essas são as minhas comidas preferidas:")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

const novaComida = prompt("Digite sua comida favorita")
comidasPreferidas[1] = novaComida

console.log(comidasPreferidas)

//EX 3
//a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
const listaDeTarefas = []

//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
const primeiraTarefa = prompt('Digite a primeira tarefa!')
const segundaTarefa = prompt('Digite a segunda tarefa!')
const terceiraTarefa = prompt('Digite a terceira tarefa!')
listaDeTarefas.push(primeiraTarefa, segundaTarefa, terceiraTarefa)

//c) Imprima o array no console
console.log(listaDeTarefas)

//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2
const tarefaFeita = prompt('Digite uma tarefa já realizada (Lembrando que a resposta tem que ser de 0 a 2)')

//e) Remova da lista o item de índice que o usuário escolheu.
listaDeTarefas.splice(tarefaFeita, 1)

//f) Imprima o array no console
console.log(listaDeTarefas)

//-------------------------------------------------------------------------------------------------------------
//DESAFIO
//EX 1
const frase = prompt("Digite sua frase!")
const fraseLista = frase.split(" ")
console.log(fraseLista)

//EX 2
const alimentos = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
const alimentosLista = ("Abacaxi")
console.log(alimentos[2] ,alimentosLista.length)








