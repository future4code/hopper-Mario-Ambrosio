import { Request, Response } from 'express'
import { connection } from '../data/connection'
import { user } from '../types'

export async function postCreateUser(req: Request, res: Response): Promise<void> {
  let statusCode = 400
  try {
    const { name, email, password } = req.body as user

    if (!name || !email || !password) {
      statusCode = 422
      throw new Error("Requição enviada está com os parâmetros inválidos!");
    }

    const result = await connection("labecommerce_users")
      .insert({
        id: Math.floor(Math.random() * 500) - 5,
        name: name,
        email: email,
        password: password
      })

    res.status(201).send("Usuário Criado Com Sucesso")

  } catch (error: any) {
    res.status(statusCode).send(error.message)
  }
}