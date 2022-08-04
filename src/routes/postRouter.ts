import { Router } from 'express';
import postController from '../controllers/postController';

const postRouter = Router();

postRouter.get('/', postController.getAll);

postRouter.post('/', postController.create);

postRouter.put('/', postController.update);

postRouter.delete('/:id', postController.remove);

export default postRouter;