import { usersApi } from "../api/users";

export interface User {
  id?: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  email?: string;
  is_active?: boolean;
  password?: string;
}

export const useUsers = async () => {
  const users = await usersApi.getUsers();

  return {
    users,
  };
};
