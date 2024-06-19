import { cookies } from "src/shared/utils/cookies";
import { User } from "../models/users";

export const usersApi = {
  get accessToken() {
    return cookies.getCookie("accessJWT") as string;
  },

  getUsers: async () => {
    let result: User[] = await fetch(
      `${location.protocol + "//" + location.hostname}/api/users`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${usersApi.accessToken}`,
        },
      }
    ).then((response) => {
      return response.json();
    });
    return result;
  },
  searchUsers: async (search: string) => {
    let result: User[] = await fetch(
      `${location.protocol + "//" + location.hostname}/api/users?` +
        new URLSearchParams({
          search: search,
        }),
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      return response.json();
    });
    return result;
  },
  resetUserPassword: async (email: string) => {
    let result = await fetch(
      `${
        location.protocol + "//" + location.hostname
      }/auth/users/reset_password/`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      }
    ).then((response) => {
      return response.status;
    });
    return result;
  },
  // createUser,
  // getUserById,
  // deleteUserById,
  // replaceUserData,
  // changeUserData,
  // activateUser,
};
