import { useContext } from "react";
import ThemeDispatchContext from "../store/ThemeDispatchContext";

const useThemeDispatch = () => {
  const ctx = useContext(ThemeDispatchContext);
  if (!ctx) throw new Error("context must be used within a provider");
  return ctx;
};

export default useThemeDispatch;
