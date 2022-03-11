//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//EX01 ---------------------------------------------------------------------------------
/*a)
Irá aparece um array com o nome, apelido e indice, e também irá aparece o antigo array
completo.
*/
//EX02 ---------------------------------------------------------------------------------
/*a)
Irá fazer um array só com o item nome do antigo array.
*/
//EX03 ---------------------------------------------------------------------------------
/*a)
Irá fazer um array apenas com apelidos diferentes de Chijo
nome: Amanda Rangel, apelido: Mandi
nome: Laís Petra, apelido: Laura
*/

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
//EX01 ---------------------------------------------------------------------------------
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
//a) 
const nomeDosDogs = (petNome) => {
    return petNome.nome 
}

const filtrarNome = pets.map(nomeDosDogs)

console.log(filtrarNome)
//b) 
const dogSalsicha = (petRaca) => {
    return petRaca.raca === "Salsicha"
}

const filtrarRaca = pets.filter(dogSalsicha)

console.log(filtrarRaca)
//c) 
const filtrarPoodle = (petpromo) => {
    if(petpromo.raca === "Poodle") {
        console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${petpromo.nome}!`)
    }
}
const promocao = pets.filter(filtrarPoodle)

//EX02 ---------------------------------------------------------------------------------
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
//a)
const nomeProdutos = (produto) => {
    return produto.nome
}
const filtrarNomeDosProdutos = produtos.map(nomeProdutos)

console.log(filtrarNomeDosProdutos)
//b)
const filtrarDesconto = produtos.map(({nome, preco})=>{
    return {nome, preco: preco - (preco * 0.05 ) }
})

console.log(filtrarDesconto)
//c)
const bebidas = (produto) => {
    if(produto.categoria === "Bebidas") {
        return produto.nome
    }
}
const filtrarBebidas = produtos.filter(bebidas)
console.log(filtrarBebidas)
//d)
const verificarNome = (produto) => {
    if(produto.nome.includes("Ypê")) {
        return produto.nome
    }
}
const filtrarNomeVerificado = produtos.filter(verificarNome)
console.log(filtrarNomeVerificado)
//e)
const divulgacaoNome = (produto) => {
    if(produto.nome.includes("Ypê")) {
        console.log(`Compre ${produto.nome} por ${produto.preco}`)
    }
}
const filtrarDivulgacao = produtos.filter(divulgacaoNome)

//DESAFIO
//EX01 ---------------------------------------------------------------------------------
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]
//a)
const ordemAlfabetica = (produto) => {
    return produto.nome
}

const filtrarOrdemAlfabetica = pokemons.map(ordemAlfabetica) 
console.log(filtrarOrdemAlfabetica.sort())
//b)
const paraARepeticao = new Set()
const tiposDePokemons = pokemons.map((elemento) => {
    paraARepeticao.add(elemento.tipo)
})
console.log(paraARepeticao)

