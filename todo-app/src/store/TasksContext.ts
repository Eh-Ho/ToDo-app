import { createContext } from "react";
import type { Task } from "../types/Task";

const TodosContext = createContext<Task[] | null>(null);

export default TodosContext;
