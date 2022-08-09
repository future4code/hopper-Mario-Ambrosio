//-------------------------------- EX01 -----------------------------------------
//-------------------------------- A -----------------------------------------
// process.argv 


//-------------------------------- B -----------------------------------------
// const nome = process.argv[2]
// const idade = process.argv[3]

// console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

//-------------------------------- C -----------------------------------------
// const nome = process.argv[2]
// const idade = Number(process.argv[3])
// const soma = idade + 7

// console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${soma}`)

//-------------------------------- EX02 -----------------------------------------
// const primeiroValor = Number(process.argv[3])
// const segundoValor = Number(process.argv[4])
// let soma 

// if (process.argv[2] == "add") {
//   soma = primeiroValor + segundoValor
//   console.log(`Resposta: ${soma}`)
// }
// else if (process.argv[2] == "sub"){
//   soma = primeiroValor - segundoValor
//   console.log(`Resposta: ${soma}`)
// }
// else if (process.argv[2] == "mult"){
//   soma = primeiroValor * segundoValor
//   console.log(`Resposta: ${soma}`)
// }
// else if (process.argv[2] == "div"){
//   soma = primeiroValor / segundoValor
//   console.log(`Resposta: ${soma}`)
// }else {
//   console.log("Algum item não está correto")
// }

//-------------------------------- EX03 -----------------------------------------
// const tarefas = ["lavar o banheiro", "limpar a casa"]

// tarefas.push(`${process.argv[2]}`)

// console.log("Tarefa adicionada com sucesso!")
// console.table(tarefas)

//-------------------------------- EX04 -----------------------------------------
