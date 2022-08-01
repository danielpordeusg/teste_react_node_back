import { ResultSetHeader } from 'mysql2/promise';
import { db } from '../connection';
import { User } from '../interfaces/userInterface';

const TABLE = 'user';

const userModel = {
  async create(user: User): Promise<User> {
    const { name, email, password } = user;
    const result = await db.execute<ResultSetHeader>(
      'INSERT INTO db.Users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password],
    );
    const [dataInserted] = result;
    const {insertId} = dataInserted;
    return { id: insertId, ...user};
  },
  async login(email: string, password:string) {
    const query = `SELECT 
    id 
    FROM 
    db.users
    WHERE
    email = ?, password = ?
    `;
    const result = await db.execute(query, [email, password]);
    console.log(result);
    return result;
    
  }
};

export default userModel;
