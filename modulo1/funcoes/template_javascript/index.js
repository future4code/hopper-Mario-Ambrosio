//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//EX 1
//a)
/*
console.log(minhaFuncao(2)) // Irá imprimi o valor 10
*/

//b)
/*
Não irá aparece nada 
*/

//EX 2
//a)
/*
Essa função começa pedindo um texto para o usuario, entrando na função ele formata o texto todo para minusculo e verifica se existe a palavra "Cenoura" no texto, no final ela exibe o texto formatado e verifica a palavra "Cenoura"
*/

//b)
/*
     i.  true
     ii. true
     iii. false
*/

//-------------------------------------------------------------------------------------------------------//

//EXERCÍCIO DE ESCRITA DE CÓDIGO
//EX 1
//a)--------------------------------
const nomeUsuario = "Mario"
const idadeUsuario = "20"
const cidadeUsuario = "São Vicente"
const estudante = "sou"

const exercicioA = (nomeU, idadeU, cidadeU, estudaU) => {
    console.log(`Eu sou ${nomeU}, tenho ${idadeU} anos. moro em ${cidadeU} e ${estudaU} estudante.`)
}

exercicioA(nomeUsuario, idadeUsuario, cidadeUsuario, estudante)

//b)--------------------------------
const nomePessoa = prompt("Digite seu nome!")
const idadePessoa = prompt("Digite sua idade!")
const cidadePessoa = prompt("Digite sua cidade!")
const profissaoPessoa = prompt("Digite sua profissão!")

const exercicioB = (nomeP, idadeP, cidadeP, profissaoP) => {
    console.log(`Eu sou ${nomeP}, tenho ${idadeP} anos, moro em ${cidadeP} e sou ${profissaoP}.`)
}
exercicioB(nomePessoa, idadePessoa, cidadePessoa, profissaoPessoa)

//EX 2
//a)--------------------------------
const somaUm = Number(prompt("Digite o primeiro número!"))
const somaDois = Number(prompt("Digite o segundo número!"))

const soma = (numUm, numDois) => {
    console.log(numUm + numDois)
}
soma(somaUm, somaDois)

//b)--------------------------------
const booleanoUm = Number(prompt("Digite o primeiro número!"))
const booleanoDois = Number(prompt("Digite o segundo número!"))

const booleano = (valorUm, valorDois) => {
    console.log(valorUm >= valorDois)
}
booleano(booleanoUm, booleanoDois)

//c)--------------------------------
const valor = Number(prompt("Digite o valor!"))

const indicador = (valorIndicado) => {
    console.log(valorIndicado % 2 == 0)
}
indicador(valor)

//d)--------------------------------
const formatar = (mensagem) => {
    console.log( mensagem.length , mensagem.toUpperCase()  )
}
const mensagemUm = prompt("Digite a mensagem!")

formatar(mensagemUm)


//EX 3
const operacoesBasicas = (numeroUm, numeroDois) => {
    console.log(`Números Inseridos: ${numeroUm} e ${numeroDois}`)
    console.log(`Soma: ${numeroUm + numeroDois}`)
    console.log(`Diferença: ${numeroUm - numeroDois}`)
    console.log(`Multiplicação: ${numeroUm * numeroDois}`)
    console.log(`Divisão: ${numeroUm / numeroDois}`)
}
const usuarioNumeroUm = Number(prompt("Digite o primeiro número!"))
const usuarioNumeroDois = Number(prompt("Digite o segundo número!"))

operacoesBasicas(usuarioNumeroUm, usuarioNumeroDois)

