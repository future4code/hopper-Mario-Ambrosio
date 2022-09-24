import { Request, Response } from 'express'
import { connection } from '../data/connection'
import { products } from '../types'

export async function postCreateProducts(req: Request, res: Response): Promise<void> {
  let statusCode = 400
  try { 
    const { name, price, image } = req.body as products

    if (!name || !price || !image) {
      statusCode = 400
      throw new Error("Requição enviada está com os parâmetros inválidos!");
    }

    const result = await connection("labecommerce_products")
      .insert({
        id: Math.floor(Math.random() * 500) - 5,
        name: name,
        price: price,
        image_url: image
      })

    res.status(201).send("Produto Criado Com Sucesso!")

  } catch (error: any) {
    res.status(statusCode).send(error.message)
  }
}