import { v4 } from "uuid"

// Exercicio 1
// A) Acredito que seja uma forma mais segura e unica de criar um id para cada novo usuário na aplicação

// B) 
export class IdGenerator {
  public generationId = () =>{
    return v4();
  }
}
