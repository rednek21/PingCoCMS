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

export const users = {
  get users() {
    return usersApi.getUsers();
  },

  checkIsEmailPresent: async (email: string) => {
    const response = await usersApi.searchUsers(email);
    if (response.length === 1) {
      return {
        isEmailPresent: true,
        err: "",
      };
    } else {
      return {
        isEmailPresent: false,
        err: "Пользователя с такой почтой нет",
      };
    }
  },

  resetPasswordByEmail: async (email: string) => {
    const response = await users.checkIsEmailPresent(email);
    if (response.isEmailPresent === false) {
      return response.err;
    }
    const statusCode = await usersApi.resetUserPassword(email);
    if (statusCode == 400) {
      return "Ошибка при отправке сообщения на почту";
    } else {
      return "";
    }
  },
};
