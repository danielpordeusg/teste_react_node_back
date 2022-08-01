import express from 'express';
import { userRoutes } from './routes/userRouter';

const app = express();

app.use(express.json());

app.use('/user', userRoutes);

app.get('/', (_req, res) => res.sendStatus(200));

export default app;
