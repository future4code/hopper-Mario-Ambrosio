//EXERCICIO 1 
//A
const inteirosNumA = (n:number) => {
    if (n >= 0) {
        inteirosNumA(n - 1)
        console.log(n)
    }
}

//Exemplo
// console.log("Exercicio 1 - A")
// console.log("2", inteirosNumA(2))
// console.log("4", inteirosNumA(4))
// console.log("6", inteirosNumA(6))
// console.log("8", inteirosNumA(8))
// console.log("10", inteirosNumA(10))

//B
const inteirosNumB = (n:number) =>{
    if(n >= 0){
        console.log(n)
        inteirosNumB(n - 1)
    }
}

//Exemplo
// console.log("Exercicio 2 - B")
// console.log("2", inteirosNumB(2))
// console.log("4", inteirosNumB(4))
// console.log("6", inteirosNumB(6))
// console.log("8", inteirosNumB(8))
// console.log("10", inteirosNumB(10))

//----------------------------------------------------------------------------------------------
//EXERCICIO 2
const somaNum = (n:number, acc:number = 0):number =>{
    if(n === 0){
        return acc
    }

    return somaNum(n - 1, acc + n)
}

//Exemplo
// console.log("Exercicio 2")
// console.log("2", somaNum(2))
// console.log("4", somaNum(4))
// console.log("6", somaNum(6))

//----------------------------------------------------------------------------------------------
//EXERCICIO 3
const somaNum2 = (n:number) => {
    let soma = 0
    for (let i = 0; i < n; i++) {
        soma += i
    }
    return soma
}

//Exemplo
// console.log("Exercicio 3")
// console.log("2", somaNum2(2))
// console.log("4", somaNum2(4))
// console.log("6", somaNum2(6))

//----------------------------------------------------------------------------------------------
//EXERCICIO 4
const array = (arr: number[], i: number = arr.length - 1) => {
    if (i >= 0) {
        array(arr, i - 1)
        console.log(`Elemento ${i}: ${arr[i]}`)
    }
};

//Exemplo
// console.log("Exercicio 4")
// const arrayDeTeste = [1,2,3,4]
// array(arrayDeTeste) 