import userModel from '../models/userModel';

const loginService = {

  async validateUser(email:string, password: string): Promise<any> {
    const modelUser = await userModel.login(email, password);
    return modelUser;
  },
};

export default loginService;