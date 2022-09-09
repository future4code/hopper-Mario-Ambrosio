import express, { Request, Response } from 'express'
import cors from 'cors'
import knex from 'knex'
import connection from './database/connection';
import { Usuarios } from './types';
import { ListError } from './error';

const app = express();

app.use(express.json());
app.use(cors());


// APLICAÇÕES

let errorCode = ListError.errorRequestInvalid

app.get('/user', async (req: Request, res: Response) => {
  try {
    const nome = req.query.search

    if (nome) {
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

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})


app.post('/user/create', async (req: Request, res: Response) => {
  try {
    const { nome, email } = req.body as Usuarios

    const Users = await connection.raw(`
      SELECT email FROM Usuarios
      WHERE email = "${email}";
    `)

    const Emails = JSON.stringify(Users[0])

    // VALIDAÇÕES DO INPUT
    if (!nome || !email) {
      errorCode = ListError.errorParameterInvalid
      throw new Error('Digite todas as requisições do body')
    }
    if (typeof nome != 'string' || typeof email != 'string') {
      errorCode = ListError.errorParameterInvalid
      throw new Error('Os dados passados no body precisam ser do tipo String')
    }
    if (!email.includes("@")) {
      errorCode = ListError.errorParameterInvalid
      throw new Error('É necessario passa o @ dentro do email')
    }

    // console.log(Emails.length)

    // REGRAS DE NEGOCIOS
    if (nome.length < 4) {
      errorCode = ListError.errorParameterInvalid
      throw new Error('O nome precisa necessariamente ter mais que 4 caracteres')
    }
    if (Emails.length > 2) {
      errorCode = ListError.errorParameterInvalid
      throw new Error('Esse email já está sendo usado!')
    }

    await connection.raw(`
      INSERT INTO Usuarios (nome, email)
      VALUES ("${nome}", "${email}")
    `)

    res.status(200).send("Usuário criado com sucesso")

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

app.post("/user/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const novoEmail = req.body.novoEmail

    // VALIDAÇÕES DO INPUT
    if (!novoEmail) {
      errorCode = ListError.errorParameterInvalid
      throw new Error('Digite todas as requisições do body')
    }
    if (typeof novoEmail != 'string') {
      errorCode = ListError.errorParameterInvalid
      throw new Error('Os dados passados no body precisam ser do tipo String')
    }
    if (!novoEmail.includes("@")) {
      errorCode = ListError.errorParameterInvalid
      throw new Error('É necessario passa o @ dentro do novoEmail')
    }

    // VERIFICAÇÃO DE USUÁRIO
    const Id = await connection.raw(`
    SELECT id FROM Usuarios
    WHERE id = "${id}";
    `)

    const User = JSON.stringify(Id[0])

    // console.log(User.length);

    if (User.length < 3) {
      errorCode = ListError.errorParameterInvalid
      throw new Error('Id de usuário não existe!')
    }

    // VERIFICAÇÃO DE EMAIL
    const Email = await connection.raw(`
    SELECT email FROM Usuarios
    WHERE email = "${novoEmail}";
  `)

    // console.log(Email);

    const Emails = JSON.stringify(Email[0])

    if (Emails.length > 2) {
      errorCode = ListError.errorParameterInvalid
      throw new Error('Esse email já está sendo usado!')
    }

    // ATUALIZAÇÃO DO EMAIL
    await connection.raw(`
      UPDATE Usuarios
      SET email = "${novoEmail}"
      WHERE id = ${id};
    `)

    res.status(200).send("Email Atualizado!")
  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

app.delete("/user/:id", async (req: Request, res:Response) => {
  try {
    const id = req.params.id

    const Id = await connection.raw(`
    SELECT id FROM Usuarios
    WHERE id = "${id}";
    `)

    const User = JSON.stringify(Id[0])

    // console.log(User.length);

    if (User.length < 3) {
      errorCode = ListError.errorParameterInvalid
      throw new Error('Id de usuário não existe!')
    }

    await connection.raw(`
      DELETE FROM Usuarios
      WHERE id = ${id}
    `)

    res.status(200).send("Usuário deletado com sucesso")
  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})


app.listen(3003, () => {
  console.log(`Servidor rodando na porta 3003`)
});
