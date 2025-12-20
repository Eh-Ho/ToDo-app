import { createContext } from "react";
import type { Dispatch } from "react";
import type { ThemeAction } from "../types/theme";

const ThemeDispatchContext = createContext<Dispatch<ThemeAction> | null>(null);

export default ThemeDispatchContext;
