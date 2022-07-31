import { ResultSetHeader } from 'mysql2/promise';
import { db } from '../connection';
import { User } from '../interfaces/userInterface';

const TABLE = 'user';

export const userModel = {
  async getAll(): Promise<User[]> {
    const sql = `
    select
    id,
    name,
    email,
    password
    from ${TABLE}
    `;
    const [rows] = await db.query(sql);
    return rows as User[];
  }
};

export const createUser = {
  async create(user: User): Promise<User> {
    const { name, email, password } = user;
    const result = await db.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password],
    );
    const [dataInserted] = result;
    const {insertId} = dataInserted;
    return { id: insertId, ...user };
  }
};

