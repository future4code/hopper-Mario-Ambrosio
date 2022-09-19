import { Request, Response } from "express"
import { connection } from "../data/connection"
import { Filter } from "../types"

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
   let statusCode = 400
   try {
      let name = req.query.name as string
      let sort = req.query.sort as string
      let order = req.query.order as string
      let size = Number(req.query.size)
      let page = Number(req.query.page)

      let type = req.params.type as string

      if (name === undefined && type.toUpperCase() !== "CX" && type.toUpperCase() !== "OPERATIONS" && type.toUpperCase() !== "TEACHER") {
            name = "%"
      }

      if (sort !== "name" && sort !== "type") {
         sort = "name"
      }

      if (order && order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC") {
         order = "DESC"
      }

      if (isNaN(size) || size < 1) {
         size = 5
      }

      if (isNaN(page) || page < 1) {
         page = 1
      }

      let offSet = size * (page - 1)


      const users = await connection("aula48_exercicio")
         .orderBy(sort, order)
         .limit(size)
         .offset(offSet)
         .where("name", "like", `%${name}%`)
         .orWhere("type", "=", `${type}`)

      // if (users.length < 1) {
      //    statusCode = 404
      //    throw new Error("Parametro passado não foi encontrado!");
      // }

      res.status(200).send(users)

   } catch (error: any) {
      res.status(statusCode).send(error.message || error.sqlMessage)
   }
}

export const getType = async (req: Request, res: Response): Promise<void> => {
   let statusCode = 400
   try {
      let type = req.params.type as string


      const user = await connection("aula48_exercicio")
         .where("type", "like", `${type}`);

      if (user.length < 1) {
         statusCode = 404
         throw new Error("Tipo não encontrado!");
      }

      res.status(200).send(user)

   } catch (error: any) {
      res.status(statusCode).send(error.message || error.sqlMessage)
   }
}
