import userModel from '../models/userModel';
import { User } from '../interfaces/userInterface';

const userService = {
  async getAll(): Promise<User[]> {
    const user = await userModel.getAll();
    return user;
  },
  async create(user: User): Promise<User>{
    const create = await userModel.create(user);
    return create;
  },
};

export default userService;