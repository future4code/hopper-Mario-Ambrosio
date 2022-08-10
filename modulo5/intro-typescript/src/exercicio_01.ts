// Exercício 01

const checaTriangulo = (a: number, b: number, c:number) => {
  if (a !== b && b !== c) {
    return "Escaleno";
  }else if (a === b && b === c){
    return "Equilátero";
  }
  return "Isósceles";
}

console.log(checaTriangulo(10,5,6))