import { ResultSetHeader } from 'mysql2/promise';
import database  from '../connection';
import { Post } from '../interfaces/postInterface';


//selecionar todas as postagens
export const postModel = {
  async getAll(): Promise<Post[]> {
    const query = `
    select
    id,
    message,
    user_id as userId
    from db.posts
    `;
    const [rows] = await database.query(query);
    return rows as Post[];
  },
  //cria uma postagem

  async create(post: Post): Promise<Post> {
    const { message,  userId} = post;
    const result = await database.execute<ResultSetHeader>(
      'INSERT INTO db.posts (message, user_id ) VALUES (?, ?)',
      [message, userId],
    );
    const [dataInserted] = result;
    const {insertId} = dataInserted;
    return { id: insertId, ...post };
  },
  //editar uma postagem

  async update(id: number, message: string){
    const query ='UPDATE db.posts SET `message` = ? WHERE `id` = ?';
    const post = await database.execute(query, [message, id]);
    console.log(message, id);
    console.log(post);
    return (post);

  },
  //deletar uma postagem
  async remove(id: number) {
    const query = ' DELETE FROM db.posts WHERE `id` = ?';
    await database.execute(query, [id]);
    return true;
  },

};

export default postModel;
