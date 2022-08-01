import { Router } from 'express';
import userController from '../controllers/userController';
import validateUser from '../middlewares/validateUser';

export const userRoutes = Router();

userRoutes.post('/', validateUser.validationUsername,
  validateUser.validationPassword,
  validateUser.validationEmail,
  userController.create);