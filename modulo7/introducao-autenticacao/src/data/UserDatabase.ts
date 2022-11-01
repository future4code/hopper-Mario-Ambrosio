import { CustomError, InvalidEmail } from "../error/customError";
import { EditUserInput, user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          email: user.email,
          password: user.password,
        })
        .into("Auth_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getUserByEmail = async (email: string) => {
    try {
      const result = await BaseDatabase.connection
        .select()
        .from("Auth_users")
        .where({ email })
      return result[0]
    } catch (error) {
      throw new InvalidEmail();
    }
  }

  public getUserById = async (id: string) => {
    try {
      const result = await UserDatabase.connection
        .select()
        .from("Auth_users")
        .where({ id })
      return result[0]
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
