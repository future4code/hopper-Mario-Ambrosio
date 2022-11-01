import * as jwt from "jsonwebtoken";
import { Unauthorized } from "../error/customError";
import { AuthenticationData } from "../model/user";

//EXERCICIO 2
//A) A linha "as string" declara que aquele parametro passado deve retorna uma string, ela é usada para proteger a função e certifica que aquele dado está sendo passado da forma correta.

//EXERCICIO 6
//A) a linha "as any" declara que aquele parametro pode retorna qualquer coisa, sendo uma string, um number ou até mesmo um array

export class Authenticator { 
  //B)
  public generateToken = ({id}: AuthenticationData): string => {
    const token = jwt.sign(
      {id},
      process.env.JWT_KEY as string,
      {expiresIn: "1min"}
    )
    return token;
  }

  //B)
  public getTokenData = (token: string) => {
    try {
      const payload = jwt.verify(token, process.env.JWT_KEY as string) as any
      const result = {
        id : payload.id
      }
      return result
    } catch (error:any) {
      console.log(error.message)
      throw new Unauthorized
    }
  }
}