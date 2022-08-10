//Exercicio 09

const idade = 20
const medio = true
const horasDisponiveis = 20
const horarioCurso = "noturno"

const testeLabenu = (idade: number, medio: boolean, hrDisp: number, hrCurso: string) => {

  if(idade >= 18 && medio === true){
    if (hrCurso == "noturno" && hrDisp >= 20) {
      console.log("Você pode participar do processo seletivo da Labenu")
    }else if(hrCurso === "integral" && hrDisp >= 40){
      console.log("Você pode participar do processo seletivo da Labenu")
    }else{
      console.log("Infelizmente você não pode participar do processo seletivo da Labenu")
    }
  }else{
    console.log("Infelizmente você não pode participar do processo seletivo da Labenu")
  }
}

testeLabenu(idade, medio, horasDisponiveis, horarioCurso)