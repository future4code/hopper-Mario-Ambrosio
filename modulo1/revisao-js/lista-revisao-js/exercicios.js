// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const comparador = (valor1, valor2) => {
        return valor1 - valor2
    }
    return array.sort(comparador)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const numerosPares = (valor1) => {
        if (valor1 % 2 === 0) {
            return valor1
        }
    }
    const filtrarPares = array.filter(numerosPares)
    return filtrarPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const resultadoElevado = []
    const numerosPares = (num1, resultado) => {
        if (num1 % 2 == 0) {
            resultado = Math.pow(num1, 2)
            resultadoElevado.push(resultado)
        }
        
    }
    array.filter(numerosPares)
    return resultadoElevado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0
    for (let num of array){
        if (num > maior){
            maior = num
        }
    }
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const maiorNumero = () => {
        if (num1 > num2){
            return num1
        }else {
            return num2
        }
    }
    const divisivel = () => {
        if (num1 > num2){
            if(num1 % num2 == 0){
                return true
            }else{
                return false
            }
        }else {
            if(num2 % num1 == 0){
                return true
            }else {
                return false
            }
        }
    }
    const diferencaValores = () => {
        if (num1 > num2){
            const diferenca = num1 - num2
            return diferenca
        }else {
            const diferenca = num2 - num1
            return diferenca
        }
    }
    const saidas = {
        maiorNumero:maiorNumero(),
        maiorDivisivelPorMenor:divisivel(),
        diferenca:diferencaValores()

    }
    return saidas
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const arrayDeNumeros = []
   for (let num = 0; num < n; num++){
       if (num % 2 === 0){
           arrayDeNumeros.push(num)
           n++
       }
   }
   return arrayDeNumeros
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB) {
        if (ladoA == ladoC){
            return "Equilátero"
        }else{ 
            return "Isósceles"
        }
    }else if (ladoB == ladoC){
        if (ladoB == ladoA){
            return "Equilátero"
        }else{
            return "Isósceles"
        }
    }else if (ladoC == ladoA){
        if(ladoC == ladoB){
            return "Equilátero"
        }else {
            return "Isósceles"
        }
    }else {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const pessoaAnonima = {
        nome:"ANÔNIMO",
        idade:pessoa.idade,
        email:pessoa.email,
        endereco: pessoa.endereco
    }
    return pessoaAnonima
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasPermitidas = []
    for(let i = 0; i < pessoas.length; i++){
        if(pessoas[i].idade > 14){
            if(pessoas[i].idade < 60){
                if(pessoas[i].altura >= 1.5){
                    pessoasPermitidas.push(pessoas[i])
                }
            }
        }
    }
return pessoasPermitidas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNaoPermitidas = []
    for(let i = 0; i < pessoas.length; i++){
        if(pessoas[i].idade > 14){
            if(pessoas[i].idade < 60){
                if(pessoas[i].altura < 1.5){
                    pessoasNaoPermitidas.push(pessoas[i])
                }
            }else{
                pessoasNaoPermitidas.push(pessoas[i])
            }
        }else {
            pessoasNaoPermitidas.push(pessoas[i])
        }
    }
return pessoasNaoPermitidas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort(function(num1, num2){
        if(num1.nome < num2.nome){
            return -1
        }else {
            return true
        }
    })
    return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}