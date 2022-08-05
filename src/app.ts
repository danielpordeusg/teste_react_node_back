import express from 'express';
import { errorHandlerMiddleware } from './middlewares/middleError';
import { userRoutes } from './routes/userRouter';
import { loginRoutes } from './routes/loginRouter';
import  postRouter from './routes/postRouter';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json(/*{limit:'50mb'}*/));

app.use('/users', userRoutes);
app.use('/login', loginRoutes);
app.use('/posts', postRouter);

app.get('/', (_req, res) => res.sendStatus(200));

app.use(errorHandlerMiddleware);

export default app;
