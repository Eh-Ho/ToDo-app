import React from "react";
import { useReducer } from "react";
import TodosContext from "../TodosContext";
import TodosDispatchContext from "../TodosDispatchContext";
import type { Todo, TodoAction } from "../../types/Todo";

type TodosProviderProps = {
  children: React.ReactNode;
};

const todosReducer = (todos: Todo[], action: TodoAction) => {
  switch (action.type) {
    case "add":
      return [...todos, action.todo];
    case "update":
      return todos.map((todo) =>
        todo._id === action.todo._id ? action.todo : todo
      );
    case "delete":
      return todos.filter((todo) => todo._id != action.id);
    default:
      return todos;
  }
};

const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, dispatch] = useReducer(todosReducer, []);
  //TODO fetch the initial state
  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
};

export default TodosProvider;
