import {Request, Response, NextFunction} from 'express';
import postService from '../services/postService';

const postController = {
  async getAll(_req:Request, res:Response, next: NextFunction){
    try {
      const post = await postService.getAll();
      return res.status(200).json(post);
    } catch (error) {
      return next(error);
    }
  },
  async create(req:Request, res:Response, next: NextFunction){
    try {
      const  post  = req.body;
      const createPost = await postService.create(post);
      return res.status(201).json({
        post: {
          id: createPost.id,
          message: createPost.message,
          userId: createPost.userId
        }
      });
    } catch (error) {
      return next(error);
    }
  },
  async update(req:Request, res: Response, next: NextFunction){
    try {
      const { message, id } = req.body;
      if(!message) return res.status(404).json({
        message: 'messagem não encontrada'
      });
      const update = await postService.update(id, message);
      return res.status(200).json(update);
    } catch (error) {
      return next(error);
    }
  },
  async remove(req:Request, res: Response, next: NextFunction){
    try {
      const { id } = req.params;
      const remove = await postService.remove(Number(id));
      if (!remove) return res.status(404).json({
        message: 'id não encontrado'
      });
      return res.status(204).json(remove);
    } catch (error) {
      return next(error);
    }
  }
};

export default postController;