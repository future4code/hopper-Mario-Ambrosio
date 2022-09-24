import { Request, Response } from 'express'
import { connection } from '../data/connection'
import { register } from '../types'

export async function postCreatePucharses(req: Request, res: Response): Promise<void> {
  let statusCode = 400
  try {
    const { user_id, product_id, quantity } = req.body as register

    if (!user_id || !product_id || !quantity) {
      statusCode = 422
      throw new Error("Requição enviada está com os parâmetros inválidos!");
    }

    const result = await connection("labecommerce_products")
      .select("price")
      .where( "id", product_id)

    await connection("labecommerce_purchases")
      .insert({
        id: Math.floor(Math.random() * 500),
        user_id: user_id,
        product_id: product_id,
        quantity: quantity,
        total_price: result[0].price * quantity,
      })


    res.status(200).send("Compra Realizada Com Sucesso")

  } catch (error: any) {
    res.status(statusCode).send(error.message)
  }
}