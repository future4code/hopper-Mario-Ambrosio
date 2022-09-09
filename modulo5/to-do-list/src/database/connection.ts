import dotenv from 'dotenv'
import  Knex  from 'knex'

dotenv.config()

export const connection = Knex({
  client:"mysql",
  connection:{
    host: process.env.DB_HOST,
    port: Number(process.env.PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSOWORD,
    database: process.env.DB_DATABASE,
    multipleStatements: true
  }
})