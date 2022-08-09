import { tarefas } from "./tarefas.js";

tarefas.push(`${process.argv[2]}`)

console.log("Tarefa adicionada com sucesso!")
console.table(tarefas)
