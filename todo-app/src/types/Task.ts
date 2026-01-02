export type Task = {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  userId: string;
};

export type TaskAction =
  | { type: "add"; task: Task }
  | { type: "update"; task: Task }
  | { type: "delete"; id: Task["_id"] };
