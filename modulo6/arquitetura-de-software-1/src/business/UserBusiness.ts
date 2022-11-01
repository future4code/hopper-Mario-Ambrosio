import { v4 as generateId } from "uuid"
import { UserDatabase } from "../data/UserDatabase";

export class UserBusiness{
  public createUser = async(input:any) => {
    try {
      const { name, email, password} = input

      if (!name || !email || !password) {
        throw new Error("Dados inválidos!");
      }

      const id = generateId()

      const userDatabase = new UserDatabase()
      await userDatabase.createUser({
        id,
        name,
        email,
        password
      })
      
    } catch (error:any) {
      throw new Error(error.message);
    }
  }

  public getAll = async () => {
    try {
      
      const userDatabase = new UserDatabase()
      const result = await userDatabase.getAll()
      return result

    } catch (error:any) {
      throw new Error(error.message);
    }
  }

  public deleteUser = async(id:string) =>{
    try {

      if (!id) {
        throw new Error("Dados inválidos!");
      }

      const userDatabase = new UserDatabase();
      await userDatabase.deleteUser(id);

    } catch (error:any) {
      throw new Error(error.message);
    }
  }
}