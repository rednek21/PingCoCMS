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
  // createUser,
  // getUserById,
  // deleteUserById,
  // replaceUserData,
  // changeUserData,
  // activateUser,
};
