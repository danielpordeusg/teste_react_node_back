import userModel from '../models/userModel';
import { User } from '../interfaces/userInterface';

const userService = {

  async create(user: User): Promise<User>{
    return await userModel.create(user);
  },
  async login(email: string, password: string){
    return await userModel.login(email, password);
  }
};


export default userService;