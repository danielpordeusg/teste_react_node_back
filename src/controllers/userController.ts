import {Request, Response,NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import userService from '../services/userService';

dotenv.config();

const secret: string = process.env.SECRET || 'chave';

const userController = {
  async getAll (_req: Request, res: Response, next: NextFunction){
    try {
      const user = await userService.getAll();
      return res.status(200).json(user);
    } catch (error) {
      return next(error);
    }
  },
  async create(req:Request, res:Response, next: NextFunction){
    try {
      const user = req.body;
      console.log(user);
      const saveUser = await userService.create(user);
      const token = jwt.sign({data: user}, secret);
      return res.status(201).json(token);
    } catch (error) {
      return next(error);
    }
  },
};

export default userController;