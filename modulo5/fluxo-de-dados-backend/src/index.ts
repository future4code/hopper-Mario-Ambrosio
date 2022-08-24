import express, { Response, Request } from 'express'
import cors from 'cors'

import { Produtos, ListaDeProdutos } from './data'

const app = express()

app.use(express.json())
app.use(cors())


//------------------------- EXERCICIO 01 --------------------------------------
app.get('/test', (req: Request, res: Response) => {
  res.status(200).send("Api funcionando!")
})

//------------------------- Exercicio 03 --------------------------------------
app.post('/create/product', (req: Request, res: Response) => {
  let statusApi = 500
  try {

    const { name, price } = req.body as ListaDeProdutos

    if (!name || !price || typeof name !== 'string' || typeof price !== 'number') {
      statusApi = 422
      throw new Error("Requisição Com Parâmetros Inválidos")
    }

    const produtoExistente = Produtos.find((product) => product.name.toLocaleLowerCase() === name.toLocaleLowerCase())

    if (produtoExistente) {
      statusApi = 409
      throw new Error("Produto Já Existente");
    }

    const produtoNovo = {
      id: `${Date.now()}`,
      name: name,
      price: price
    }

    Produtos.push(produtoNovo)
    res.status(201).send(Produtos)   

  } catch (err: any) {
    res.status(statusApi).send({ message: err.message, status: statusApi })
  }
})

//------------------------- Exercicio 04 --------------------------------------
app.get('/product', (req: Request, res: Response) => {

  res.status(200).send(Produtos)

})

//------------------------- Exercicio 05 --------------------------------------
app.post('/product', (req: Request, res: Response) => {

  let statusApi = 500
  try {

    const { newPrice } = req.body
    const name = req.query.name

    if (!newPrice || !name || typeof newPrice !== 'number' || newPrice <= 0) {
      statusApi = 422
      throw new Error("Resquição com parâmetros inválidos");
    }

    const novaValor = Produtos.map((product) => {
      if (product.name === name) {
        product.price = newPrice
      }
      return product
    })

    res.status(201).send(novaValor)

  } catch (err: any) {
    res.status(statusApi).send({
      message: err.message,
      status: statusApi
    })
  }
})

//------------------------- Exercicio 06 --------------------------------------
app.delete('/product', (req:Request, res:Response) => {
  let statusApi = 500
  try{
    const id = req.query.id

    if (!id) {
      statusApi = 422
      throw new Error("Requisição com parâmetro inválido");
    }

    const produtoAtualizado = Produtos.filter((product) => {
      if (product.id !== id) {
        return product
      }
    })

    res.status(200).send(produtoAtualizado)

  }catch (err: any){
    res.status(statusApi).send({
      message: err.message,
      status: statusApi
    })
  }

})

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003")
})