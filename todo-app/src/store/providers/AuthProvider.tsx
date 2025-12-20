import React from "react";
import { useReducer } from "react";
import AuthContext from "../AuthContext";
import AuthDispatchContext from "../AuthDispatchContext";
import type { AuthState, AuthAction } from "../../types/Auth";

type AuthProviderProps = {
  children: React.ReactNode;
};

const authReducer = (auth: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "login":
      return { user: action.user, token: action.token };
    case "logout":
      return { user: null, token: null };
    case "setUser":
      return { ...auth, user: action.user };
    case "setToken":
      return { ...auth, token: action.token };
    default:
      return auth;
  }
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, dispatch] = useReducer(authReducer, { user: null, token: null });
  //TODO fetch the user from localstorage or etc.
  return (
    <AuthContext.Provider value={auth}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
