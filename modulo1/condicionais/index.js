//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//Ex 1 ------------------------------------------------------------------------------
//a)
/*
O código recebe um número e verifica se a divisão dele é igual a 0, se ele for ele passa no teste, caso contrario ele não passa
*/
//b)
/*
Números pares
*/
//c)
/*
Números Impares
*/

//Ex 2 ------------------------------------------------------------------------------
//a)
/*
O codigo a cima pergunta para o usuario qual fruta ele quer e assim que ele escolhe informa o valor da fruta.
*/
//b)
/*
O preço da fruta maçã é R$ 2.25
*/
//c)
/*
O preço da fruta pêra é R$ 5 (o valor de baixo virá pois tirando o break o programa não para naquela função e continua operando)
*/

//Ex 3 ------------------------------------------------------------------------------
//a)
/*
A primeira linha informa para o console que a variavel digitada pelo usuário será um número e logo em seguida pede para o usuário digita o número
*/
//b)
/*
O usuário digitando 10 irá imprimir "Esse número passou no teste"
o usuário digitando -10 não será impresso nada no terminal
*/
//c)
/*
Havéra um erro no segundo console.log
if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"  //pois aqui ele está fazendo um escopo local 
}

console.log(mensagem) //E aqui ele chama um escopo que precisaria ser global por está fora da função If 
*/


//EXERCÍCIOS DE ESCRITA DE CÓDIGO 
//Ex 1 ------------------------------------------------------------------------------
//a)
const idadeUsuario = prompt("Digite sua idade!")

//b)
const tranformaçãoIdade = Number(idadeUsuario)

//c)
if (idadeUsuario >= 18) {
    console.log("Você pode dirigir")
}else {
    console.log("Você não pode dirigir")
}

//Ex 2 ------------------------------------------------------------------------------
alert ("Digite M para matutino, V para vespertino e N para noturno")
const turmaDoAluno = prompt("Digite o periodo no qual você estuda!").toUpperCase()
const arrayDeTurmas = ["M","V","N"]

const consulta = (inf,turma) => {
    if(inf === turma[0]){
        console.log("Bom dia!")
    } else if (inf === turma[1]){
        console.log("Boa tarde!")
    } else if (inf === turma[2]){
        console.log("Boa noite")
    }
}

consulta(turmaDoAluno, arrayDeTurmas)

//Ex 3 ------------------------------------------------------------------------------
const turmaDoAlunoDois = prompt("Digite o periodo no qual você estuda!").toUpperCase()
const arrayDeTurmasDois = ["M","V","N"]

const consultaTurma = (informacao) => {
    switch (informacao) {
        case 'M':
            console.log("Bom dia!")
            break
        case 'V':
            console.log("Boa tarde!")
            break
        case 'N':
            console.log("Boa noite!")
            break
    }
}

consultaTurma(turmaDoAlunoDois)

//Ex 4 ------------------------------------------------------------------------------
const generoFilme = prompt("Qual gênero de filme irá assisti!").toLowerCase()
const precoIngresso = prompt("Qual o valor do ingresso!")

const verificacao = (filme, ingresso) => {
    if (filme === "fantasia") {
        if (ingresso < 15){
            console.log("Bom filme")
        }else {
            console.log("Escolha outro filme :(")
        }
    }else {
        console.log("Escolha outro filme :(")
    }
}
verificacao(generoFilme, precoIngresso)

//DESAFIO
//Ex 1 ------------------------------------------------------------------------------
const generoFilmeDois = prompt("Qual gênero de filme irá assisti!").toLowerCase()
const precoIngressoDois = prompt("Qual o valor do ingresso!")

const verificacaoDois = (filmeUm, ingressoUm, lachinhoUm) => {
    if (filmeUm === "fantasia") {

        if (ingressoUm < 15){
            lachinhoUm = prompt("Qual lanche você irá querer?")
            console.log(`Bom filme!` + ` Aproveite o seu(sua) ${lachinhoUm}`)

        }else {
            console.log("Escolha outro filme :(")

        }

    }else {
        console.log("Escolha outro filme :(")

    }
}
verificacaoDois(generoFilmeDois, precoIngressoDois)

//Ex 2 ------------------------------------------------------------------------------
const nomeCompleto = prompt("Digite seu nome completo")
alert ("Digite IN para indica internacional e DO para indica doméstico")
const tipoJogo = prompt("Digite o tipo do jogo").toUpperCase()
const arrayTipoJogo = ["IN", "DO"]
alert ("Digite SF para indica semi-final, DT para indica decisão de terceiro lugar e FI para indica final")
const etapaJogo = prompt("Digite sua etapa do jogo").toUpperCase()
const arrayEtapaJogo = ["SF", "DT", "FI"]
alert ("Escolha a cadegoria de 1 a 4")
const categoria = prompt("Digite sua categoria")
const arrayCategoria = ["1","2","3","4"]
const quantidadeIngresso = Number(prompt("Digite a quantidade de ingressos"))

if (tipoJogo === arrayTipoJogo[0]) {
    if (etapaJogo === arrayEtapaJogo[0]) {
        if(categoria === arrayCategoria[0]){
            console.log("-----Dados da Compra-----")
            console.log("",nomeCompleto)
            console.log("",tipoJogo)
            console.log("",etapaJogo)
            console.log("",categoria)
            console.log("",quantidadeIngresso)
            console.log("-----Valores-----")
            console.log("U$321,96")
            console.log("U$",321.96 * quantidadeIngresso)

        }else if(categoria === arrayCategoria[1]) {
            console.log("-----Dados da Compra-----")
            console.log("",nomeCompleto)
            console.log("",tipoJogo)
            console.log("",etapaJogo)
            console.log("",categoria)
            console.log("",quantidadeIngresso)
            console.log("-----Valores-----")
            console.log("U$214,64")
            console.log("U$",214.64 * quantidadeIngresso)

        }else if(categoria === arrayCategoria[2]){
            console.log("-----Dados da Compra-----")
            console.log("",nomeCompleto)
            console.log("",tipoJogo)
            console.log("",etapaJogo)
            console.log("",categoria)
            console.log("",quantidadeIngresso)
            console.log("-----Valores-----")
            console.log("U$134,15")
            console.log("U$",134.15 * quantidadeIngresso)
    
        }else if(categoria === arrayCategoria[3]){
            console.log("-----Dados da Compra-----")
            console.log("",nomeCompleto)
            console.log("",tipoJogo)
            console.log("",etapaJogo)
            console.log("",categoria)
            console.log("",quantidadeIngresso)
            console.log("-----Valores-----")
            console.log("U$53,66")
            console.log("U$",53.66 * quantidadeIngresso)

        }else{
            alert = "Opção não encontrada"
        }

    }else if(etapaJogo === arrayEtapaJogo[1]) {
        if(categoria === arrayCategoria[0]){
            console.log("-----Dados da Compra-----")
            console.log("",nomeCompleto)
            console.log("",tipoJogo)
            console.log("",etapaJogo)
            console.log("",categoria)
            console.log("",quantidadeIngresso)
            console.log("-----Valores-----")
            console.log("U$160,98")
            console.log("U$",160.98 * quantidadeIngresso)

        }else if(categoria === arrayCategoria[1]) {
            console.log("-----Dados da Compra-----")
            console.log("",nomeCompleto)
            console.log("",tipoJogo)
            console.log("",etapaJogo)
            console.log("",categoria)
            console.log("",quantidadeIngresso)
            console.log("-----Valores-----")
            console.log("U$107,32")
            console.log("U$",107.32 * quantidadeIngresso)

        }else if(categoria === arrayCategoria[2]){
            console.log("-----Dados da Compra-----")
            console.log("",nomeCompleto)
            console.log("",tipoJogo)
            console.log("",etapaJogo)
            console.log("",categoria)
            console.log("",quantidadeIngresso)
            console.log("-----Valores-----")
            console.log("U$80,49")
            console.log("U$",80.49 * quantidadeIngresso)
    
        }else if(categoria === arrayCategoria[3]){
            console.log("-----Dados da Compra-----")
            console.log("",nomeCompleto)
            console.log("",tipoJogo)
            console.log("",etapaJogo)
            console.log("",categoria)
            console.log("",quantidadeIngresso)
            console.log("-----Valores-----")
            console.log("U$41,47")
            console.log("U$",41.47 * quantidadeIngresso)

        }else{
            alert = "Opção não encontrada"
        }

    }else if(etapaJogo === arrayEtapaJogo[2]){
        if(categoria === arrayCategoria[0]){
            console.log("-----Dados da Compra-----")
            console.log("",nomeCompleto)
            console.log("",tipoJogo)
            console.log("",etapaJogo)
            console.log("",categoria)
            console.log("",quantidadeIngresso)
            console.log("-----Valores-----")
            console.log("U$482,93")
            console.log("U$",482.93 * quantidadeIngresso)

        }else if(categoria === arrayCategoria[1]) {
            console.log("-----Dados da Compra-----")
            console.log("",nomeCompleto)
            console.log("",tipoJogo)
            console.log("",etapaJogo)
            console.log("",categoria)
            console.log("",quantidadeIngresso)
            console.log("-----Valores-----")
            console.log("U$321,96")
            console.log("U$",321.96 * quantidadeIngresso)

        }else if(categoria === arrayCategoria[2]){
            console.log("-----Dados da Compra-----")
            console.log("",nomeCompleto)
            console.log("",tipoJogo)
            console.log("",etapaJogo)
            console.log("",categoria)
            console.log("",quantidadeIngresso)
            console.log("-----Valores-----")
            console.log("U$214,64")
            console.log("U$",214.64 * quantidadeIngresso)
    
        }else if(categoria === arrayCategoria[3]){
            console.log("-----Dados da Compra-----")
            console.log("",nomeCompleto)
            console.log("",tipoJogo)
            console.log("",etapaJogo)
            console.log("",categoria)
            console.log("",quantidadeIngresso)
            console.log("-----Valores-----")
            console.log("U$80,49")
            console.log("U$",80.49 * quantidadeIngresso)

        }else{
            alert = "Opção não encontrada"
        }

    }else{
        alert = "Opção não encontrada"
    }

}else if (tipoJogo === arrayTipoJogo[1]){
    if (etapaJogo === arrayEtapaJogo[0]) {
        if(categoria === arrayCategoria[0]){
            console.log("-----Dados da Compra-----")
            console.log("",nomeCompleto)
            console.log("",tipoJogo)
            console.log("",etapaJogo)
            console.log("",categoria)
            console.log("",quantidadeIngresso)
            console.log("-----Valores-----")
            console.log("R$1.320,00")
            console.log("R$",1320 * quantidadeIngresso)

        }else if(categoria === arrayCategoria[1]) {
            console.log("-----Dados da Compra-----")
            console.log("",nomeCompleto)
            console.log("",tipoJogo)
            console.log("",etapaJogo)
            console.log("",categoria)
            console.log("",quantidadeIngresso)
            console.log("-----Valores-----")
            console.log("R$880,00")
            console.log("R$",880 * quantidadeIngresso)

        }else if(categoria === arrayCategoria[2]){
            console.log("-----Dados da Compra-----")
            console.log("",nomeCompleto)
            console.log("",tipoJogo)
            console.log("",etapaJogo)
            console.log("",categoria)
            console.log("",quantidadeIngresso)
            console.log("-----Valores-----")
            console.log("R$550,00")
            console.log("R$",550 * quantidadeIngresso)
    
        }else if(categoria === arrayCategoria[3]){
            console.log("-----Dados da Compra-----")
            console.log("",nomeCompleto)
            console.log("",tipoJogo)
            console.log("",etapaJogo)
            console.log("",categoria)
            console.log("",quantidadeIngresso)
            console.log("-----Valores-----")
            console.log("R$220,00")
            console.log("R$",220 * quantidadeIngresso)

        }else{
            alert = "Opção não encontrada"
        }

    }else if(etapaJogo === arrayEtapaJogo[1]) {
        if(categoria === arrayCategoria[0]){
            console.log("-----Dados da Compra-----")
            console.log("",nomeCompleto)
            console.log("",tipoJogo)
            console.log("",etapaJogo)
            console.log("",categoria)
            console.log("",quantidadeIngresso)
            console.log("-----Valores-----")
            console.log("R$660,00")
            console.log("R$",660 * quantidadeIngresso)

        }else if(categoria === arrayCategoria[1]) {
            console.log("-----Dados da Compra-----")
            console.log("",nomeCompleto)
            console.log("",tipoJogo)
            console.log("",etapaJogo)
            console.log("",categoria)
            console.log("",quantidadeIngresso)
            console.log("-----Valores-----")
            console.log("R$440,00")
            console.log("R$",440 * quantidadeIngresso)

        }else if(categoria === arrayCategoria[2]){
            console.log("-----Dados da Compra-----")
            console.log("",nomeCompleto)
            console.log("",tipoJogo)
            console.log("",etapaJogo)
            console.log("",categoria)
            console.log("",quantidadeIngresso)
            console.log("-----Valores-----")
            console.log("R$330,00")
            console.log("R$",330 * quantidadeIngresso)
    
        }else if(categoria === arrayCategoria[3]){
            console.log("-----Dados da Compra-----")
            console.log("",nomeCompleto)
            console.log("",tipoJogo)
            console.log("",etapaJogo)
            console.log("",categoria)
            console.log("",quantidadeIngresso)
            console.log("-----Valores-----")
            console.log("R$170,00")
            console.log("R$",170 * quantidadeIngresso)

        }else{
            alert = "Opção não encontrada"
        }

    }else if(etapaJogo === arrayEtapaJogo[2]){
        if(categoria === arrayCategoria[0]){
            console.log("-----Dados da Compra-----")
            console.log("",nomeCompleto)
            console.log("",tipoJogo)
            console.log("",etapaJogo)
            console.log("",categoria)
            console.log("",quantidadeIngresso)
            console.log("-----Valores-----")
            console.log("R$1.980,00")
            console.log("R$",1980 * quantidadeIngresso)

        }else if(categoria === arrayCategoria[1]) {
            console.log("-----Dados da Compra-----")
            console.log("",nomeCompleto)
            console.log("",tipoJogo)
            console.log("",etapaJogo)
            console.log("",categoria)
            console.log("",quantidadeIngresso)
            console.log("-----Valores-----")
            console.log("R$1.320,00")
            console.log("R$",1320 * quantidadeIngresso)

        }else if(categoria === arrayCategoria[2]){
            console.log("-----Dados da Compra-----")
            console.log("",nomeCompleto)
            console.log("",tipoJogo)
            console.log("",etapaJogo)
            console.log("",categoria)
            console.log("",quantidadeIngresso)
            console.log("-----Valores-----")
            console.log("R$880,00")
            console.log("R$",880 * quantidadeIngresso)

        }else if(categoria === arrayCategoria[3]){
            console.log("-----Dados da Compra-----")
            console.log("",nomeCompleto)
            console.log("",tipoJogo)
            console.log("",etapaJogo)
            console.log("",categoria)
            console.log("",quantidadeIngresso)
            console.log("-----Valores-----")
            console.log("R$330,00")
            console.log("R$",330 * quantidadeIngresso)

        }else{
            alert = "Opção não encontrada"
        }

    }else{
        alert = "Opção não encontrada"
    }

}else {
    alert = "Opção não encontrada"
}





