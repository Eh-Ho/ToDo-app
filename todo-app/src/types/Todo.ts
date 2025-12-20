export type Todo = {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  userId: string;
};

export type TodoAction =
  | { type: "add"; todo: Todo }
  | { type: "update"; todo: Todo }
  | { type: "delete"; id: Todo["_id"] };
