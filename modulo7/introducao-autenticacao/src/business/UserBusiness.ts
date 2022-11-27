import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword } from "../error/customError";
import {
  UserInputDTO,
  user,
  TokenUserInputDTO,
  EditUserInput,
} from "../model/user";
import { Authenticator } from "../services/authenticator";
import { IdGenerator } from "../services/idGenerator";

//EXERCICIO 3
//A)
const idGenerator = new IdGenerator();
const authenticator = new Authenticator();

export class UserBusiness {
  public signup = async (input: UserInputDTO) => {
    try {
      const {email, password } = input;

      if (!email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "email" e "password"'
        );
      }

      //B)
      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      //C)
      if(password.length < 6){
        throw new InvalidPassword();
      }

      const id: string = idGenerator.generationId()

      const user: user = {
        id,
        email,
        password,
      };

      const userDatabase = new UserDatabase();
      await userDatabase.insertUser(user);

      const token = authenticator.generateToken({id})
      return token;

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: UserInputDTO) => {
    try {
      const {email, password } = input;

      if (!email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "email" e "password"'
        );
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const userDatabase = new UserDatabase();
      const user = await userDatabase.getUserByEmail(email);

      if (user.password !== password) {
        throw new InvalidPassword();
      }

      const token = authenticator.generateToken(user.id)
      return token

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getUser = async (input: TokenUserInputDTO) => {
    try {
      const { token } = input;

      const authenticationData = authenticator.getTokenData(token)

      const userDatabase = new UserDatabase();
      const result = await userDatabase.getUserById(authenticationData.id);

      const User = {
        id : result.id,
        email : result.email
      }

      return User
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
