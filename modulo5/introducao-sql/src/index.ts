import express, { Request, Response } from 'express'
import cors from 'cors'
import knex from 'knex'
import connection from './database/connection';
import { Usuarios } from './types';

const app = express();

app.use(express.json());
app.use(cors());

// APLICAÇÕES
let errorCode = 400

app.get('/user', async (req:Request, res:Response) =>{
  try {
    const nome = req.query.search

    if(nome){
      const searchName = await connection.raw(`
        SELECT * FROM Usuarios
        WHERE nome = "${nome}";
      `) 

      return res.status(200).send(searchName[0])
    }

    const searchUsers = await connection.raw(`
      SELECT * FROM Usuarios;
    `)

    return res.status(200).send(searchUsers[0])

  } catch (error : any) {
    res.status(errorCode).send(error.message)
  }
})


app.post('/user', async (req:Request, res:Response) => {
  try {
    const {nome , email} = req.body as Usuarios

    const Users = await connection.raw(`
      SELECT * FROM Usuarios;
    `)

    // VALIDAÇÕES DO INPUT
    if (!nome || !email) {
      throw new Error('Digite todas as requisições do body')
    }
    if (nome !== 'string' || email !== 'string') {
      throw new Error('Os dados passados no body precisam ser do tipo String')
    }
    if(){
      throw new Error('É necessario passa o @ dentro do email')
    }

    // REGRAS DE NEGOCIOS
    for (const usuarios of Users) {
      if(usuarios.email === email){
        throw new Error('Esse email de usuário já existe!')
      }
    }
    if (nome.length < 4) {
      throw new Error('O nome precisa necessariamente ter mais que 4 caracteres')
    }

    const createUser = await connection.raw(`
      INSERT INTO Usuarios (nome, email)
      VALUES ("${nome}", "${email}")
    `)

    res.status(200).send(createUser)

  } catch (error : any) {
    res.status(errorCode).send(error.message)
  }
})

app.listen(3003, () => {
  console.log(`Servidor rodando na porta 3003`)
});
