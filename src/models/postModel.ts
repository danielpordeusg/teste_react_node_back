import { ResultSetHeader } from 'mysql2/promise';
import { db } from '../connection';
import { Post } from '../interfaces/postInterface';

const TABLE = 'post';

//selecionar todas as postagens
export const postModel = {
  async getAll(): Promise<Post[]> {
    const sql = `
    select
    id,
    message,
    userId
    from ${TABLE}
    `;
    const [rows] = await db.query(sql);
    return rows as Post[];
  }
};

//cria uma postagem

export const createPost = {
  async create(post: Post): Promise<Post> {
    const { message,  userId} = post;
    const result = await db.execute<ResultSetHeader>(
      'INSERT INTO db.Users (message, userId) VALUES (?, ?)',
      [message, userId],
    );
    const [dataInserted] = result;
    const {insertId} = dataInserted;
    return { id: insertId, ...post };
  }
};

//editar uma postagem
export const updatePost = {
  async update(){
    console.log('pra n dar errror nvoamente');
  }
};


//deletar uma postagem
