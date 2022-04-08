```JS
 const resultadoTarefas = tarefas.filter((trf) => {
     return trf.status === "done"
 })

 const resultadoFinalDasTarefas = resultadoTarefas.map((trf) => {
     return trf.titulo
 })
 return(resultadoFinalDasTarefas)
```