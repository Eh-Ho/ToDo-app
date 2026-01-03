import type { Task } from "./Task";

export type List = {
  _id:string;
  name:string;
  iconName:string;
  tasks : Task[];
  userId:string;
}