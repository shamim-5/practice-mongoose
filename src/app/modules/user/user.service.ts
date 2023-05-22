import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);

  await user.save();
  // console.log(user);

  console.log(user.fullName()); // custom instance methods -->create a new instance and call methods user.methodsName

  return user;
};

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();

  return users;
};

export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { name: 1, email: 1, role: 1 });

  return user;
};

export const getAdminUsersFromDB = async () => {
  const admins = await User.getAdminUsers(); // static and methods both used -->call methods directly from model -->User.methodsName

  return admins;
};
