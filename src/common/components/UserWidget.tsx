import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const UserWidget = () => {
  const { login, logout, user } = useContext(UserContext);

  return !user ? (
    <>
      <span>Welcome Guest</span>
      <button className="btn btn-dark" onClick={login}>
        Login
      </button>
    </>
  ) : (
    <>
      <span>Welcome {user.display_name}</span>
      <button className="btn btn-dark" onClick={logout}>
        Logout
      </button>
    </>
  );
};
