import { Request,Response } from 'express'
import { connection } from '../data/connection'

export async function getPurchases( req: Request, res: Response ): Promise<void>{
  let statusCode = 400
  try {
    const user = req.params.user_id

    if (!user) {
      statusCode = 422
      throw new Error("Requição enviada está com os parâmetros inválidos!");
    }

    const result = await connection("labecommerce_purchases")
      .where("user_id",user)

    if (result.length <= 0) {
      statusCode = 404
      throw new Error("Compra não encontrada!");
    }

    res.status(200).send(result)
    
  } catch (error:any) {
    res.status(statusCode).send(error.message)
  }
}