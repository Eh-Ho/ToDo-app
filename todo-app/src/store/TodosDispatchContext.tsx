import { createContext } from "react";
import type { Dispatch } from "react";
import type { TodoAction } from "../types/Todo";
const TodosDispatchContext = createContext<Dispatch<TodoAction> | null>(null);

export default TodosDispatchContext;
