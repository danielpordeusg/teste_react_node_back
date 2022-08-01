import {Request, Response} from 'express';
import userService from '../services/userService';

const userController = {

  async create(req:Request, res:Response){
    const userinfo = req.body;
    const {password, ...user }= await userService.create(userinfo);
    return res.status(201).json(user);
  },
  async login(req:Request, res: Response){
    const { email, password } = req.body;
    if (email || password) {
      console.log('pra n dar error');
    }
  }
};

export default userController;