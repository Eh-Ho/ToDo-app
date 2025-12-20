import { createContext } from "react";
import type { Dispatch } from "react";
import type { AuthAction } from "../types/Auth";

const AuthDispatchContext = createContext<Dispatch<AuthAction> | null>(null);

export default AuthDispatchContext;
