import express, { Request, Response } from "express";
import cors from 'cors'

import { Afazer, afazeres, afazerUser } from './data'

const app = express()

app.use(express.json())
app.use(cors())

//-------------------------- EXERCICIO 01 -------------------------------------

app.get("/ping", (req: Request, res: Response) => {
  res.send("pong")
})

//-------------------------- EXERCICIO 04 -------------------------------------

app.get("/afazer/filtro", (req: Request, res: Response) => {
  const dados = req.query.dadosDosAfazeres

  if (!dados) {
    res.status(400).send('Passe a query antes de fazer a requisição dos dados')
  }

  const filtroDeAfazeres = afazeres.filter((tarefa) => {
    if (tarefa.afazer === dados) {
      return tarefa
    }
  })

  res.send(filtroDeAfazeres)
})

//-------------------------- EXERCICIO 05 -------------------------------------

app.post("/afazeres", (req: Request, res: Response) => {
  // const tarefa = req.body.title
  // const estado = req.body.afazer
  const { tarefa, estado } = req.body

  if (!tarefa || !estado) {
    res.status(400).send('Escreva o body exigido antes de fazer a requisição dos dados')
  } else {
    const addAfazer = (array: any) => {
      // for (let afazer of afazeres) {
      //   if (afazer.id === 1) {
      //     return afazer
      //   }
      // }

      const novaTarefa = {
        id: `${Date.now()}`,
        title: tarefa,
        afazer: estado
      }
      array.push(novaTarefa)
      return array
    }

    res.send(addAfazer(afazeres))
  }

})

//-------------------------- EXERCICIO 06 -------------------------------------

app.post('/afazer', (req: Request, res: Response) => {

  const afazerId = req.query.id

  if (!afazerId) {
    res.status(400).send('Passe a query antes de fazer a requisição dos dados')
  }

  // for (let arr of afazeres) {
  //   if (arr.id === afazerId) {

  //   }
  // }

  let afazerAtualizado
  const atualizacaoDoAfazer = afazeres.forEach(arr => {
    if (arr.id === afazerId) {
      if (arr.afazer === "completo") {
        arr.afazer = Afazer.INCOMPLETO
        afazerAtualizado = arr
      } else {
        arr.afazer = Afazer.COMPLETO
        afazerAtualizado = arr
      }
    }
  })
  atualizacaoDoAfazer

  res.send({ atualizacaoDoAfazer, afazerAtualizado })

})

//-------------------------- EXERCICIO 07 -------------------------------------

app.delete("/afazer", (req: Request, res: Response) => {

  const afazerId = req.query.id

  if (!afazerId) {
    res.status(400).send('Passe a query antes de fazer a requisição dos dados')
  }

  //PRIMEIRO JEITO QUE EU PENSEI EM FAZER

  // const deleteAfazer = () => {
  //   const afazeresAtualizados = []

  //   for (let arr of afazeres) {
  //     if (arr.id !== afazerId) {
  //       afazeresAtualizados.push(arr)
  //     }
  //   }
  //   return afazeresAtualizados
  // }

  // res.send(deleteAfazer())

  //SEGUNDO JEITO QUE EU PENSEI EM FAZER

  const filtroAfazeres = afazeres.filter((afazer) => {
    if (afazer.id !== afazerId) {
      return true
    }
  })


  res.send(filtroAfazeres)
})

//-------------------------- EXERCICIO 08 -------------------------------------

app.get("/afazerUser", (req:Request, res:Response) =>{
  const userId = req.headers.authorization

  if (!userId) {
    res.status(400).send('Passe o authorizarion antes de fazer a requisição dos dados')
  }

  const afazeresDoUsuario = []
  for (let arr of afazerUser) {
    if (arr.user === userId) {
      afazeresDoUsuario.push(arr)
    }
  }

  res.send(afazeresDoUsuario)
})


app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
})