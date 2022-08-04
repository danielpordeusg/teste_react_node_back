import postModel from '../models/postModel';
import { Post } from '../interfaces/postInterface';

const postService = {
  async getAll(): Promise<Post[]> {
    const post = await postModel.getAll();
    return post;
  },
  async create(post: Post): Promise<Post>{
    const create = await postModel.create(post);
    return create;
  },
  async update(id: number, message: string): Promise<any>{
    const update =  await postModel.update(id, message);
    return update;
  },
  async remove(id: number): Promise<any>{
    const remove = await postModel.remove(id);
    return remove;
  }
};

export default postService;