import { useContext } from "react";
import AuthContext from "../store/AuthContext";

const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("context must be used within a provider");
  return ctx;
};

export default useAuth;
