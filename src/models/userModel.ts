import { ResultSetHeader } from 'mysql2/promise';
import database  from '../connection';
import { User } from '../interfaces/userInterface';


const userModel = {
  async getAll(): Promise<any> {
    try {
      const result = await database
        .execute('SELECT * FROM db.users');
      const [rows] = result;
      console.log(rows);
      return rows as User[];
    } catch (error) {
      return error;
    }
  },
  async create(user: User): Promise<User> {
    const { name, email, password } = user;
    const result = await database.execute<ResultSetHeader>(
      'INSERT INTO db.users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password],
    );
    const [dataInserted] = result;
    const {insertId} = dataInserted;
    return { id: insertId, ...user};
  },
  async login(email: string, password:string) {
    const query = 'SELECT id, email, password FROM db.users WHERE `email`=? and `password`=?' ;
    const [result] = await database.execute(query, [email, password]);
    const user = (result as User[])[0];
    return user;
  }
};

export default userModel;
