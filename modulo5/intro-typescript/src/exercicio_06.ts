// Exercicio 06

const funcoesMatematicas = (num1: number, num2: number) => {
  const soma = num1 + num2;
  const sub = num1 - num2;
  const multi = num1 * num2;
  let diferensa 

  if (num1 > num2) {
    diferensa = num1
  }else {
    diferensa = num2
  }

  console.log(`Soma: ${soma} \n Subtração: ${sub} \n Multiplicação: ${multi} \n Maior Valor: ${diferensa}`)
}

funcoesMatematicas(10,20)

