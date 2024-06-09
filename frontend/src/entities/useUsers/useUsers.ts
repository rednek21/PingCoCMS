import { getCookie } from "src/entities/Utilities";

export interface User {
  id?: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  email?: string;
  is_active?: boolean;
  password?: string;
}

export const useUsers = () => {
  let accessToken = getCookie("accessJWT") as string;

  const getUsers = async () => {
    let result: User[] = await fetch(
      `${location.protocol + "//" + location.hostname}/api/users`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    ).then((response) => {
      return response.json();
    });
    return result;
  };
  return {
    getUsers,
    // createUser,
    // getUserById,
    // deleteUserById,
    // replaceUserData,
    // changeUserData,
    // activateUser,
  };
};
