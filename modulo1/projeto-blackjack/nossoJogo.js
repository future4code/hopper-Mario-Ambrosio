/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log(`Boas vindas ao jogo de BlackJack!`)

const novaRodada = confirm(`Quer iniciar uma nova rodada?`)


if(novaRodada === true) {
   function resultadoValores  () {
      //cartas do usuário
      let cartaUsuarioUm = comprarCarta()
      let cartaUsuarioDois = comprarCarta()
   
      let somaUsuario = cartaUsuarioUm.valor + cartaUsuarioDois.valor
      console.log(`Usuário - cartas: ${cartaUsuarioUm.texto} ${cartaUsuarioDois.texto} = ${somaUsuario}`)

      //cartas do computador
      let cartaComputadorUm = comprarCarta()
      let cartaComputadorDois  = comprarCarta()
   
      let somaComputador = cartaComputadorUm.valor + cartaComputadorDois.valor
      console.log(`Computador - cartas: ${cartaComputadorUm.texto} ${cartaComputadorDois.texto} = ${somaComputador}`)

      //resultado da rodada
      function resolucao () {
         if (somaUsuario === somaComputador) {
            console.log("Empate")
         }else if (somaUsuario > somaComputador){
            console.log("O usuário venceu!")
         }else if (somaUsuario < somaComputador) {
            console.log("O computador venceu!")
         }
      }
      resolucao()

   } 
   resultadoValores()

}else if (novaRodada === false){
  console.log(`O jogo acabou`)
}


