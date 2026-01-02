import Checkbox from "./CheckBox";
import Tag from "./Tag";
import type { Task } from "../../types/Task";
import TaskActionMenu from "./TaskActionMenu";

interface TaskItemProps {
  task: Task;
  color: string;
  onToggle: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem = ({
  task,
  color,
  onToggle,
  onEdit,
  onDelete,
}: TaskItemProps) => {
  return (
    <div className="flex flex-col justify-center  gap-2 p-2 items-center border-white border rounded-md shadow-md my-2 min-h-10">
      <div className="w-full flex items-center justify-between">
        <div className="inline-flex items-center gap-2 ">
          <Checkbox
            checked={task.completed}
            color={color}
            onChange={() => onToggle(task._id)}
          />
          <span
            className={`truncate text-sm font-medium transition-colors ${
              task.completed ? "text-tertiary line-through" : "text-content"
            }`}
          >
            {task.title}
          </span>
        </div>

        <TaskActionMenu
          onDelete={() => onDelete(task._id)}
          onEdit={() => onEdit(task._id)}
        ></TaskActionMenu>
      </div>

      <div className="flex items-center gap-2 overflow-x-scroll max-w-full">
        <Tag color={"yellow"} text="important"></Tag>
        <Tag color={"red"} text="important"></Tag>
        <Tag color={"indigo"} text="important"></Tag>
        <Tag color={"blue"} text="important"></Tag>
      </div>
    </div>
  );
};

export default TaskItem;
