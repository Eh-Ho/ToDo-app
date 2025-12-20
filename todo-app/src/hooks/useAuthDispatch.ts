import { useContext } from "react";
import AuthDispatchContext from "../store/AuthDispatchContext";

const useAuthDispatch = () => {
  const ctx = useContext(AuthDispatchContext);
  if (!ctx) throw new Error("context must be used within a provider");
  return ctx;
};

export default useAuthDispatch;
