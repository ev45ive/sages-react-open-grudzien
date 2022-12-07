import React, { PropsWithChildren, useState } from "react";
import { User } from "../model/User";

export const UserContext = React.createContext({
  user: null as User | null,
  login() {},
  logout() {},
});

const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  const context = {
    user,
    login() {
      setUser({ display_name: "FakeUser" } as User);
    },
    logout() {
      setUser(null);
    },
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
