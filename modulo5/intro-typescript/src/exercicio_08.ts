//Exercicio 08

const reverso = (palavra: string) => {
  return palavra.split("").reverse().join("")
}

console.log(reverso("BANANA"))