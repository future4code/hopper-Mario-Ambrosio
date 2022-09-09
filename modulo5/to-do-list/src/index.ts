import express, { Request, Response } from 'express';
import cors from 'cors';
import knex from 'knex'
import { connection } from './database/connection';
import { ListError } from './error';
import { Usuario, Tarefas } from './types';

const app = express();

app.use(express.json());
app.use(cors());


// EXERCICIO 01
app.post("/user/create", async (req: Request, res: Response) => {
  let errorCode = ListError.errorRequestInvalid
  try {
    const { name, nickname, email } = req.body as Usuario

    if (!name || !nickname || !email) {
      errorCode = ListError.errorParameterInvalid
      throw new Error("Os dados não foram corretamente inseridos");
    }
    if (!email.includes("@")) {
      errorCode = ListError.errorParameterInvalid
      throw new Error("O dado email necessita ter @ nele");
    }

    await connection.raw(`
      INSERT INTO ListUser( name,nickname,email ) 
      VALUES ('${name}', '${nickname}', '${email}')
    `)

    res.status(201).send('O usuário foi criado!')
  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

// EXERCICIO 02
app.get("/user/:id", async (req: Request, res: Response) => {
  let errorCode = ListError.errorRequestInvalid
  try {
    const User = await connection.raw(`
      SELECT id, nickname FROM ListUser
      WHERE id = ${req.params.id}
    `)

    if (User[0].length < 1) {
      errorCode = ListError.errorRouteNotFound
      throw new Error("O Usuário não foi encontrado");
    }

    res.status(200).send(User[0])

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

// EXERCICIO 03
app.put("/user/edit/:id", async (req: Request, res: Response) => {
  let errorCode = ListError.errorRequestInvalid
  try {
    const { name, nickname } = req.body as Usuario

    if (!name || !nickname) {
      errorCode = ListError.errorParameterInvalid
      throw new Error("Os dados não foram corretamente inseridos");
    }

    const User = await connection.raw(`
      SELECT id FROM ListUser
      WHERE id = ${req.params.id}
    `)

    if (User[0].length < 1) {
      errorCode = ListError.errorRouteNotFound
      throw new Error("O Usuário não foi encontrado");
    }

    await connection.raw(`
      UPDATE ListUser
      SET name = '${name}', nickname = '${nickname}'
      WHERE id = ${req.params.id}
    `)

    res.status(200).send("Edição feita com sucesso!")
  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

// EXERCICIO 04
app.post("/task", async (req: Request, res: Response) => {
  let errorCode = ListError.errorRequestInvalid
  try {
    const { title, description, limit_date, creator_user_id } = req.body 

    if (!title || !description || !limit_date || !creator_user_id) {
      errorCode = ListError.errorParameterInvalid
      throw new Error("Os dados não foram corretamente inseridos");
    }

    let dateAmericana = limit_date.split('/').reverse().join('/');

    await connection.raw(`
    
      INSERT INTO ListTasks (title, description, limit_date, creator_user_id)
      VALUES ("${title}","${description}","${dateAmericana}","${creator_user_id}");

    `)

    res.status(201).send("Tarefa criada com sucesso!")
  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

// EXERCICIO 05
app.get("/task/:id", async (req:Request, res:Response)=>{
  let errorCode = ListError.errorRequestInvalid
  try {
    const TaskId = await connection.raw(`
      SELECT * FROM ListUser
      JOIN ListTasks ON ListTasks.creator_user_id = ListUser.id
      WHERE ListUser.id = ${req.params.id};
    `)

    if (TaskId[0].length == 0) {
      errorCode = ListError.errorRouteNotFound
      throw new Error("O Usuário não foi encontrado");
    }

    res.status(200).send(TaskId[0])

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

app.listen(3003, () => {
  console.log('Servidor rodando na porta 3003')
})

