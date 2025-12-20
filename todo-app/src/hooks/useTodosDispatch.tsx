import { useContext } from "react";
import TodosDispatchContext from "../store/TodosDispatchContext";

const useTodos = () => {
  const ctx = useContext(TodosDispatchContext);
  if (!ctx) throw new Error("context must be used within a provider");
  return ctx;
};

export default useTodos;
