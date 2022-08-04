import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import loginService from '../services/loginService';

dotenv.config();

const secret: string = process.env.SECRET || 'chave';


const loginController = {
  async login (req: Request, res: Response){
    try {
      const { email, password} = req.body;
      if (!email) {
        return res.status(400).json({
          message: 'email inválido'
        });
      }
      if(!password){
        return res.status(400).json({
          message: 'senha inválido'
        });
      }
      const user = await loginService.validateUser(email, password);
      if(!user) return res.status(404).json({message: 'user not found'});
      const token = jwt.sign({data: user}, secret);
      return res.status(200).json(token);
    } catch (error) {
      return error;
    }

  }
};
export default loginController;