//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//EX 1 ------------------------------------------------------------
//a) O que vai ser impresso no console?
/*
O primeiro console irá imprimi o nome Matheus Nachtergaele 
*/

//EX 2 ------------------------------------------------------------
//a) O que vai ser impresso no console?
/*
Console 1 :
nome: Juca
idade: 3
raca: SRD

Console 2 :
nome: Juba
idade: 3
raca: SRD

Console 3 :
nome: Jubo
idade: 3
raca: SRD
*/

//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
/*
A sintaxe dos três pontos copia um objeto já existente e o refaz novamente igual (ou modificado)
*/

//EX 3 ------------------------------------------------------------
//a) O que vai ser impresso no console?
/*
Console 1 :
False
Console 2 :
undefined
*/

//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
/*
O primeiro console chama a chave bacjebder, que imprime oque existe no objto (no caso false)
O segundo console chama a chave altura, que não está no objeto pessoa, senedo assim ele cria um altura dentro do objeto mas mesmo assim da undefined pois a chave altura criada está vazia
*/


//EXERCÍCIO DE ESCRITA DE CÓDIGO
//EX 1 ------------------------------------------------------------
//a)
const pessoa = {
  nome: "Leonel",
  apelido: ["Messi", "Ronaldo", "Gaucho"]
}

const resultadoNomeApelido = (user) => {

console.log(`Eu sou ${user.nome}, mas pode me chamar de: ${user.apelido}`)
}
resultadoNomeApelido(pessoa)
//b)
const novaPessoa = {
  ...pessoa,
  apelido: ["Brown", "Xavier", "Potter"]
}
resultadoNomeApelido(novaPessoa)


//EX 2 ------------------------------------------------------------
//a)

const pessoaUm = {
  nome: "Raimundo",
  idade: "40",
  profissao: "Pedreiro" 
}
const pessoaDois = {
  nome: "Jaime",
  idade: "70",
  profissao: "Padeiro" 
}

//b) 
const resultado = (usuario) => {
  usuario = [usuario.nome, usuario.nome.length, usuario.idade, usuario.profissao, usuario.profissao.length]
  console.log(usuario)
}
resultado(pessoaUm)
resultado(pessoaDois)

//EX 3 ------------------------------------------------------------
//a)
const carrinho = []

//b)
const frutaUm = {
  nome: "Banana",
  disponibilidade: true
}
const frutaDois = {
  nome: "Laranja",
  disponibilidade: true
}
const frutaTres = {
  nome: "Maçã",
  disponibilidade: true
}

//c)
const receber = (parametro) => {
  carrinho.push(parametro)
  return carrinho
}
receber(frutaUm)
receber(frutaDois)
receber(frutaTres)

//d)
console.log(carrinho)

//DESAFIO
//EX 1 ------------------------------------------------------------
const usuarioNome = prompt('Digite seu nome!')
const usuarioIdade = prompt('Digite sua idade!')
const usuarioProfissao = prompt('Digite sua profissão!')

const objetoUsuario = {
  nome: usuarioNome,
  idade: usuarioIdade,
  profissao: usuarioProfissao
}

console.log(objetoUsuario)

//EX 2 ------------------------------------------------------------
const filmeUm = {
  anoDeLançamento: 1999,
  nome: "Matrix"
}
const filmeDois = {
  anoDeLançamento: 1999,
  nome: "Clube Da Luta"
}

console.log(`O primeiro filme foi lançado antes do segundo? ${filmeUm.anoDeLançamento < filmeDois.anoDeLançamento}`)
console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${filmeUm.anoDeLançamento == filmeDois.anoDeLançamento}`)

//EX 3 ------------------------------------------------------------
const receberInvertido = (parametroInvertido, disponibilidade) => {
  parametroInvertido.disponibilidade = !disponibilidade
  console.log(carrinho)
}
receberInvertido(frutaUm, frutaUm.disponibilidade)







