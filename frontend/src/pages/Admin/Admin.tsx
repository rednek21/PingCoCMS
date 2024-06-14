import { useNavigate } from "react-router-dom";
import { ShineButton } from "src/shared/ShineButton";
import { useTokens } from "src/entities/useTokens";
import { useUsers, User } from "src/entities/useUsers";
import { useState } from "react";

export const Admin = () => {
  const [users, setUsers] = useState([] as User[]);

  const { getUsers } = useUsers();
  const { removeTokens } = useTokens();
  const navigate = useNavigate();
  function handleLogout() {
    removeTokens();
    navigate("/auth/");
  }

  async function handleUsers() {
    let users = await getUsers();
    setUsers(users);
  }

  return (
    <div className=" m-4">
      <p className=" m-4">You are authorized</p>
      <ShineButton text={"Logout"} handleClick={() => handleLogout()} />
      <ShineButton text={"Users"} handleClick={() => handleUsers()} />
      {users?.map((user) => {
        return (
          <div key={user.id} className=" m-4">
            <p>ID: {user.id}</p>
            <p>First Name: {user.first_name}</p>
            <p>Last Name: {user.last_name}</p>
            <p>Username: {user.username}</p>
            <p>email: {user.email}</p>
            <p>Active: {"" + user.is_active}</p>
          </div>
        );
      })}
    </div>
  );
};
