```JS
const somaNota = (ex + p1 + p2) / 3
resultadoNota = (soma) => {
    if(soma >= 9){
      return "A"
    }else if (soma < 9 && soma >= 7.5) {
      return "B"
    }else if (soma < 7.5 && soma >= 6){
      return "C"
    }else if (soma < 6){
      return "D"
    }
  }
return resultadoNota(somaNota)
```