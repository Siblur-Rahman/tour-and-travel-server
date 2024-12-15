import { IUser } from './user.interface';
import User from './user.model';

const createUser = async (userData: IUser): Promise<IUser> => {
  const result = await User.create(userData);
  return result;
};

const getAllUsers = async () => {
  const result = await User.find();
  return result;
};
const getSingleUser = async (email: string) => {
  const result = await User.findOne({ email: email });
  return result;
};

const updateUser = async (id: string, userData: IUser) => {
  const result = await User.findByIdAndUpdate(id, userData, {
    new: true, // part-5 MS2-CSDay-2
  });
  return result;
};
const deleteUser = async (id: string) => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

export const userService = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
