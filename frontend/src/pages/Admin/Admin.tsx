import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "src/features/auth";
import { User, users } from "src/features/users";
import { ShineButton } from "src/shared/ui/ShineButton";

export const Admin = () => {
  const [usersArray, setUsersArray] = useState<User[] | null>(null);

  const navigate = useNavigate();

  function handleLogout() {
    auth.logout();
    navigate("/auth/");
  }

  async function handleUsers() {
    setUsersArray(await users.users);
  }

  return (
    <div className=" m-4">
      <p className=" m-4">You are authorized</p>
      <ShineButton text={"Logout"} handleClick={() => handleLogout()} />
      <ShineButton text={"Users"} handleClick={() => handleUsers()} />
      {usersArray ? (
        usersArray.map((user) => {
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
        })
      ) : (
        <div> Load users here .!.</div>
      )}
    </div>
  );
};
