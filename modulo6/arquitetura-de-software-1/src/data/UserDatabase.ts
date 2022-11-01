import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase{
  private static TABLE_NAME = "User_Arq";

  async createUser({ id,name,email,password }:any):Promise<void>{
    await UserDatabase.connection
     .insert({
      id,
      name,
      email,
      password
     })
     .into(UserDatabase.TABLE_NAME)
  }

  async getAll():Promise<any>{
    const result = await UserDatabase.connection(UserDatabase.TABLE_NAME)
      .select()
    return result
  }

  async deleteUser(id:string):Promise<void> {
    await UserDatabase.connection(UserDatabase.TABLE_NAME)
      .delete()
      .where("id", "=", id)
  }

}