import React, { createContext, useState } from "react";

export type User = {
  token: string;
  record: {
    id: string;
    collectionId: string;
    collectionName: string;
    created: string;
    updated: string;
    username: string;
    verified: boolean;
    emailVisibility: boolean;
    email: string;
    name: string;
    avatar: string;
    field: string;
  };
};

export const AuthContext = createContext<{
  user: Partial<User> | User;
  setUser: (user: User) => void;
}>({
  user: { token: null },
  setUser: (user: User) => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<null | User>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
