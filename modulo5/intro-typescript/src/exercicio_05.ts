//Exercicio 05

const checaRenovacaoRg = (anoAtual: number, anoNascimento: number, anoEmissao: number) =>{
  let idade = anoAtual - anoNascimento
  let tempoCarteira = anoAtual - anoEmissao

  if (idade <= 20) {
    return tempoCarteira >= 5 ? "Passou dos 5 anos precisa renovar" : "Ainda não passou os 5 anos"
  }
  else if (idade >= 20 || idade <= 50){
    return tempoCarteira >= 10 ? "Passou dos 10 anos precisa renovar" : "Ainda não passou dos 10 anos"
  }
  else if (idade > 50){
    return tempoCarteira >=15 ? "Passou dos 15 anos precisa renovar" : "Ainda não passou os 15 anos"  
  }
  return "error"
}

console.log(checaRenovacaoRg(2022,2001,2012))