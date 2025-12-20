import { createContext } from "react";
import type { Todo } from "../types/Todo";

const TodosContext = createContext<Todo[] | null>(null);

export default TodosContext;
