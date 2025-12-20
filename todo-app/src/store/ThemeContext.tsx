import { createContext } from "react";
import type { Theme } from "../types/theme";

const ThemeContext = createContext<Theme | null>(null);

export default ThemeContext;
