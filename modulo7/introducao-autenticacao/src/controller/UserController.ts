import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { TokenUserInputDTO, UserInputDTO } from "../model/user";

export class UserController {

      public signup = async (req: Request, res: Response) => {
        try {
          const {email, password } = req.body;
    
          const input: UserInputDTO = {
            email,
            password,
          };

          const userBusiness = new UserBusiness()
          const token = await userBusiness.signup(input);
    
          res.status(201).send({ message: "Usuário criado!", token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };    

      public login = async (req: Request, res: Response) => {
        try {
          const {email, password} = req.body;
    
          const input: UserInputDTO = {
            email,
            password,
          };

          const userBusiness = new UserBusiness()
          const token = await userBusiness.login(input);
    
          res.status(201).send({token});
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };    

      public getUser = async (req: Request, res: Response) => {
        try {
          
          const input: TokenUserInputDTO = {
            token : req.headers.authorization as string
          };

          const userBusiness = new UserBusiness()
          const result = await userBusiness.getUser(input);
    
          res.status(200).send(result);
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }; 

}
