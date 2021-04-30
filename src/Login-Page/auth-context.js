import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isUserLoggedIn, setUserLogin] = useState(false);

  return (
    <AuthContext.Provider value={{ isUserLoggedIn, setUserLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
