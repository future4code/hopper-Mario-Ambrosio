import { Request,Response } from "express"
import { UserBusiness } from "../business/UserBusiness"

export class UserController{
  public createUser = async(req:Request, res:Response) => {
    try {
      const { name,email,password } = req.body

      const input = {
        name,
        email,
        password
      }

      const userBusiness = new UserBusiness()
      await userBusiness.createUser(input)

      res.status(201).send({ message:"Usuário Criado Com Sucesso" })
    } catch (error:any) {
      res.status(400).send(error.message)
    }
  }

  public getAll = async(req:Request,res:Response) => {
    try {
      
      const userBusiness = new UserBusiness()
      const result = await userBusiness.getAll()

      res.status(200).send({ Resultado: result })
    } catch (error:any) {
      res.status(400).send(error.message)
    }
  }

  public deleteUser = async(req:Request, res:Response) => {
    try {
      const id = req.params.id

      const userBusiness = new UserBusiness()
      await userBusiness.deleteUser(id)

      res.status(200).send({ message:"Usuário Apagado Com Sucesso" })
    } catch (error:any) {
      res.status(400).send(error.message)
    }
  }
}