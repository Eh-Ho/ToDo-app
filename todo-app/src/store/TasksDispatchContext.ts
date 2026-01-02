import { createContext } from "react";
import type { Dispatch } from "react";
import type { TaskAction } from "../types/Task";
const TasksDispatchContext = createContext<Dispatch<TaskAction> | null>(null);

export default TasksDispatchContext;
