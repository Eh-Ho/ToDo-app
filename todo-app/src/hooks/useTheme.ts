import { useContext } from "react";
import ThemeContext from "../store/ThemeContext";

const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("context must be used within a provider");
  return ctx;
};

export default useTheme;
