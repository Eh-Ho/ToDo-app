export type Theme = "light" | "dark" | "system";
export type ThemeAction =
  | { type: "setLight" }
  | { type: "setDark" }
  | { type: "setSystem" };
