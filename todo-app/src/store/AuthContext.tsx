import { createContext } from "react";
import type { AuthState } from "../types/Auth";

const AuthContext = createContext<AuthState | null>(null);

export default AuthContext;
