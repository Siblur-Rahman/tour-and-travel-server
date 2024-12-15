import express, { Request, Response } from 'express';
import userRouter from './modules/user/user.router';

const app = express();
app.use(express.json());

app.use('/api/user', userRouter);
app.get('/', (req: Request, res: Response) => {
  res.send('geting test');
});

export default app;
