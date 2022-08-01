import { NextFunction, Request, Response } from 'express';
import {User} from '../interfaces/userInterface';

//funcionamento extra ao que foi pedido

function validationUsername(req: Request, res: Response, next: NextFunction) {
  const user: User = req.body;
  const { name } = user;
  if (!name) return res.status(400).json({ error: 'name is required' });
  if (typeof name !== 'string') {
    return res.status(422).json(
      { error: 'name must be a string' },
    );
  }
  if (name.length < 3) {
    return res.status(422).json({ 
      error: 'Username must be longer than 2 characters' });
  }
  next();
}

//funcionamento extra ao que foi pedido

function validationPassword(req: Request, res: Response, next: NextFunction) {
  const user: User = req.body;
  const { password } = user;
  if (!password) return res.status(400).json({ error: 'Password is required' });
  if (typeof password !== 'string') {
    return res.status(422).json(
      { error: 'Password must be a string' },
    );
  }
  if (password.length < 8) {
    return res.status(422).json({ 
      error: 'Password must be longer than 7 characters' });
  }
  next();
}

//funcionamento extra ao que foi pedido

function validationEmail(req: Request, res: Response, next: NextFunction){
  const user: User = req.body;
  const { email } = user;
  if(!email) return res.status(400).json({error: 'email is required'});
  if(typeof email !== 'string'){
    return res.status(422).json({
      error: 'email must be a string'
    });
  }
  next();
}

export default{
  validationUsername,
  validationPassword,
  validationEmail
};