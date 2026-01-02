import { useContext } from "react";
import TasksContext from "../store/TasksContext";

const useTodos = () => {
  const ctx = useContext(TasksContext);
  if (!ctx) throw new Error("context must be used within a provider");
  return ctx;
};

export default useTodos;
