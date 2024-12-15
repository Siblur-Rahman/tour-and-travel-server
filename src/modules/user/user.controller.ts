import { Request, Response } from 'express';
// import User from './user.model';
import { userService } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;

    // const result = await User.create(userData);
    const result = await userService.createUser(userData);
    res.json({
      message: 'user created successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      userStatus: false,
      message: 'Something went wrong',
      error,
    });
  }
};
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUsers();

    res.send({
      status: true,
      message: 'user got successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      userStatus: false,
      message: 'Something went wrong',
      error,
    });
  }
};
const getSingleUser = async (req: Request, res: Response) => {
  const email = req.params.email;
  try {
    const result = await userService.getSingleUser(email);

    res.send({
      status: true,
      message: 'user got successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      userStatus: false,
      message: 'Something went wrong',
      error,
    });
  }
};
const updateUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  const userData = req.body;
  try {
    const result = await userService.updateUser(id, userData);

    res.send({
      status: true,
      message: 'user updated successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      userStatus: false,
      message: 'Something went wrong',
      error,
    });
  }
};
const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    await userService.deleteUser(id);

    res.send({
      status: true,
      message: 'user deleted successfully',
    });
  } catch (error) {
    res.json({
      userStatus: false,
      message: 'Something went wrong',
      error,
    });
  }
};

export const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
