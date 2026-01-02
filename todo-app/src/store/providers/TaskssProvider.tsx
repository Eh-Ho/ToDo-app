import React from "react";
import { useReducer } from "react";
import TasksContext from "../TasksContext";
import TasksDispatchContext from "../TasksDispatchContext";
import type { Task, TaskAction } from "../../types/Task";

type TasksProviderProps = {
  children: React.ReactNode;
};

const tasksReducer = (tasks: Task[], action: TaskAction) => {
  switch (action.type) {
    case "add":
      return [...tasks, action.task];
    case "update":
      return tasks.map((task) =>
        task._id === action.task._id ? action.task : task
      );
    case "delete":
      return tasks.filter((task) => task._id != action.id);
    default:
      return tasks;
  }
};

const TodosProvider = ({ children }: TasksProviderProps) => {
  const [todos, dispatch] = useReducer(tasksReducer, []);
  //TODO fetch the initial state
  return (
    <TasksContext.Provider value={todos}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
};

export default TodosProvider;
