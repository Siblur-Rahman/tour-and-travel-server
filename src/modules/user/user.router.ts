import { Router } from 'express';
import { userController } from './user.controller';

const userRouter = Router();

userRouter.post('/create-user', userController.createUser);
userRouter.get('/allUsers', userController.getAllUsers);
userRouter.get('/singleUser/:email', userController.getSingleUser);
userRouter.put('/updateUser/:id', userController.updateUser);
userRouter.delete('/deleteUser/:id', userController.deleteUser);

export default userRouter;
