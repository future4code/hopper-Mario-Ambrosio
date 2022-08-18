//-------------------------------- Questão A --------------------------------------
function obterEstatisticas(numeros: number[]) {

  const numerosOrdenados = numeros.sort(
    (a, b) => a - b
  )

  let soma = 0

  for (let num of numeros) {
    soma += num
  }

  const estatisticas = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length
  }
  return estatisticas
}

//  console.log(obterEstatisticas([10,20,30,40,50]))

//AS ENTRADAS SÃO UM ARRAY DE NUMEROS E A SAÍDA É O MAIOR, MENOR E A MEDIA DOS VALORES DO ARRAY


//-------------------------------- Questão B --------------------------------------


//A variavel de numerosOrdenados, que faz um sort para fazer um novo array de numeros ordenado.
//A variavel soma que faz dentro do for a soma dos valores dentro do array passado, para no final fazer a media dividida pela quantidade de numeros passados no array.


//-------------------------------- Questão C --------------------------------------

type AmostraDeDados = {
  numeros: number[],
  obterEstatisticas: (numeros:number[]) => {}
}
