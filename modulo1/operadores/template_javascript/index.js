//EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO

//EX 1
/*
Console.log("a. ", resultado) //O resultado será FALSO/FALSE

Console.log("b. ", resultado) //O resultado será FALSO/FALSE

Console.log("c. ", resultado) //O resultado será VERDADEIRO/TRUE

Console.log("d. ", resultado) //O typeof irá imprimi booleano/boolean
*/

//EX 2
/*
Em nenhuma das duas variaveis contém o Number (Que diz para o computador que oque está sendo é um número)
por conta disso o codigo dele não está somando e sim juntando os dois valores digitados no final.
*/

//EX 3 
/* 
Que digite o codigo com o Number antes de Prompt que seria dessa forma :

let primeiroNumero = number(prompt("Digite um numero!"))

let segundoNumero = number(prompt("Digite outro numero!"))
*/

//EXERCÍCIO DE ESCRITA DE CÓDIGO

//EX 1
//a) Pergunte a idade do usuário
let idade = prompt("Digite sua idade!")
//b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
let idadeAmigoOuAmiga = prompt ("Digite a idade do seu melhor amigo ou da sua melhor amiga!")
idadeDosDois = idade > idadeAmigoOuAmiga
//c) Imprima na console a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (true ou false)
console.log("Sua idade é maior do que a do seu melhor amigo ?", idadeDosDois)
//d) Imprima na console a diferença de idade (não tem problema se sair um número negativo)
console.log("A diferença de idade é :", idade - idadeAmigoOuAmiga)

//EX 2
//a) Peça ao usuário que insira um número par
let numeroPar = prompt("Digite um número par!")
resultado = numeroPar % 2
//b) Imprima na console o resto da divisão desse número por 2.
console.log(resultado)
//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
/*
Todos os números pares dividos pelo valor 2 retornam o valor 0
*/
//d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
/*
Todos os números impares dividos pelo valor 2 retornam o valor 1
*/

//EX 3
let idadeEmAnos = prompt ("Digite sua idade em anos!")
//a) A idade do usuário em meses
console.log("Idade em meses :", idadeEmAnos * 12)
//b) A idade do usuário em dias
console.log("Idade em dias :", idadeEmAnos * 365)
//c) A idade do usuário em horas
console.log("Idade em horas :", idadeEmAnos * 8765)

//EX 4
let primeiroValor = Number(prompt ("Digite o primeiro numero!"))
let segundoValor = Number(prompt ("Digite o segundo numero!"))

console.log("O primeiro numero é maior que o segundo ?", primeiroValor > segundoValor)
console.log("O primeiro numero é igual que o segundo ?", primeiroValor === segundoValor)
console.log("O primeiro numero é divisível pelo segundo ?", primeiroValor % segundoValor === 0)
console.log("O segundo numero é divisível pelo primeiro ?", segundoValor % primeiroValor === 0)

//DESAFIO
//EX 1
resultadoA = (77-32) * (5/9) + 273.15
resultadoB = (80) * (9/5) + 32
resultadoC = (30) * (9/5) + 32
resultadoD = (30) + 273.15

//a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
console.log("O valor de 77°F em K é :", resultadoA)
//b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
console.log("O valor de 80°C em F é :", resultadoB)
//c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
console.log("O valor de 30°C em F é", resultadoC,"e em K é", resultadoD)
//d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter
let celsius = Number(prompt("Digite o Valor em Celsius!"))

resultadocelsius1 = (celsius) * (9/5) + 32
resultadocelsius2 = (celsius) + 273.15

console.log("O valor de", celsius,"°C em F é", resultadocelsius1,"e em K é", resultadocelsius2)

//EX 2
const quilowattHora = 280
const valorkwh = 0.05

//a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
console.log("Com sua residencia consumindo o valor a ser pago será de :", quilowattHora * valorkwh,"R$")
//b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto
console.log("Com o desconto o valor ficará :", (quilowattHora * valorkwh) * 0.15 )

//EX3
//a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
const libra = 20

console.log("A conversão de 20 libra para quilogramas é:", libra / 2.205)
//b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
const onça = 10.5

console.log("A conversão de 10.5 onça para quilogramas é:", onça / 3.528)
//c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
const milha = 100

console.log("A conversão de 100 milha para metro é:", milha * 1609)
//d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
const pes = 50

console.log("A conversão de 50 pés para metro é:", pes * 0.3048)
//e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
const galao = 103.56

console.log("A conversão de 103.56 galão para litro é:", galao * 3.785)
//f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
const xicara = 450

console.log("A conversão de 450 xícara para litro é:", xicara / 3.52)
//g) Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter
let milhaEscolha = Number(prompt("Digite o valor em milhas para converter em metros!"))

console.log("A conversão de milha para metro é:", milhaEscolha * 1609)



