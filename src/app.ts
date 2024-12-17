import express, { Request, Response } from 'express';
import userRouter from './modules/user/user.router';
import tourRouter from './modules/tour/tour.router';

const app = express();
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/tour', tourRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('geting test');
});

export default app;
