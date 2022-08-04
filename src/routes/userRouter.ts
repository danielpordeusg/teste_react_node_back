import { Router } from 'express';
import userController from '../controllers/userController';
import validateUser from '../middlewares/validateUser';

export const userRoutes = Router();

userRoutes.get('/', userController.getAll);

userRoutes.post('/', validateUser.validationUsername,
  validateUser.validationPassword,
  validateUser.validationEmail,
  userController.create);