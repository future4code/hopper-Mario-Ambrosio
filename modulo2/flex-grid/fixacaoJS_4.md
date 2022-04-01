```JS
let quantasVezesNum = 0
for(let i of arrayDeNumeros){
  if(numeroEscolhido === arrayDeNumeros[i]){
      quantasVezesNum ++
    }
}
if(quantasVezesNum == 0){
    quantasVezesNum = `Número não encontrado`
    return(quantasVezesNum)
}
else if(quantasVezesNum >= numeroEscolhido || quantasVezesNum <= numeroEscolhido ){
  quantasVezesNum = quantasVezesNum -1 
  return `O número ${numeroEscolhido} aparece ${quantasVezesNum}x`
} 
```