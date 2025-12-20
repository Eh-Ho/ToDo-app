import { useContext } from "react";
import TodosContext from "../store/TodosContext";

const useTodos = () => {
  const ctx = useContext(TodosContext);
  if (!ctx) throw new Error("context must be used within a provider");
  return ctx;
};

export default useTodos;
