import { Request, Response } from 'express'
import { connection } from '../data/connection'

export async function getProducts(req: Request, res: Response): Promise<void> {
  let statusCode = 400
  try {
    const order = req.query.order as string
    const search = req.query.search as string
    
    if (order && order == "ASC" || order == "DESC" || order == "asc" || order == "desc") {
      if (search) {
        const product = await connection("labecommerce_products")
          .where("name", search)
          .orderBy("name", order)

        res.status(200).send(product)
      } else {
        const result = await connection("labecommerce_products")
          .orderBy("name", order)

        res.status(200).send(result);
      }
    } else {
      if (search) {
        const product = await connection("labecommerce_products")
          .where("name", search)

        res.status(200).send(product)
      } else {
        const result = await connection("labecommerce_products")

        res.status(200).send(result);
      }
    }


  } catch (error: any) {
    res.status(statusCode).send(error.message)
  }
}