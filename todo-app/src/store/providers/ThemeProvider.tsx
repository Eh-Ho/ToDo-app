import React from "react";
import { useReducer } from "react";
import ThemeContext from "../ThemeContext";
import ThemeDispatchContext from "../ThemeDispatchContext";
import type { Theme, ThemeAction } from "../../types/theme";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const themeReducer = (theme: Theme, action: ThemeAction) => {
  switch (action.type) {
    case "setLight":
      return "light";

    case "setDark":
      return "dark";

    case "setSystem":
      return "system";

    default:
      return theme;
  }
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, dispatch] = useReducer(themeReducer, "system");

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
