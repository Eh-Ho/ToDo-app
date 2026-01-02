import { useContext } from "react";
import TasksDispatchContext from "../store/TasksDispatchContext";

const useTodosDispatch = () => {
  const ctx = useContext(TasksDispatchContext);
  if (!ctx) throw new Error("context must be used within a provider");
  return ctx;
};

export default useTodosDispatch;
