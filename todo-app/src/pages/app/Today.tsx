import Button from "../../components/UI/Button";
import TextInput from "../../components/UI/TextInput";
import Card from "../../components/UI/Card";
import {
  CheckCircleIcon,
  ClockIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import WelcomeSign from "../../components/UI/WelcomeSign";
import TaskItem from "../../components/UI/TaskItem";
import type { Task } from "../../types/Task";
import { useState } from "react";

const Today = () => {
  const task: Task = {
    title: "test title",
    completed: false,
    description: "description",
    userId: "user id",
    _id: "id",
  };
  const [testTask, setTestTask] = useState<Task>(task);
  return (
    <div className="w-full flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 m-10 relative">
        <WelcomeSign userName="Ehsan" />
        <div className="flex items-end">
          <TextInput
            placeHolder="Add a task..."
            button={
              <Button>
                <PlusIcon className="size-5" />
              </Button>
            }
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4">
        <Card>
          <div className="w-full flex flex-col">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold flex items-center gap-1">
                <div className="rounded-full bg-blue-500 shrink-0 size-4" />
                Todo
              </h2>
              <span className="text-tertiary text-sm ">1 of 6 completed</span>
            </div>
            <span className="border-b border-3 border-muted"></span>

            <div>
              <TaskItem
                color="blue-500"
                task={testTask}
                onToggle={() =>
                  setTestTask({ ...testTask, completed: !testTask.completed })
                }
                onDelete={() => console.log(testTask._id)}
                onEdit={() => console.log(testTask._id)}
              />
            </div>
          </div>
        </Card>
        <Card>
          <div className="w-full flex flex-col">
            <div className="flex justify-between items-center">
              <h2 className=" text-lg font-bold flex items-center gap-1">
                <ClockIcon className="text-red-500 size-5" /> Overdue
              </h2>
              <span className="text-red-500 text-sm ">2 overdue tasks</span>
            </div>
            <span className="border-b border-3 border-muted"></span>

            <div></div>
          </div>
        </Card>
        <Card>
          <div className="w-full flex flex-col">
            <div className="flex justify-between items-center">
              <h2 className=" text-lg font-bold flex items-center gap-1">
                <CheckCircleIcon className="size-5 text-green-500" /> Completed
              </h2>
              <span className="text-tertiary text-sm ">3 tasks completed</span>
            </div>
            <span className="border-b border-3 border-muted"></span>
            <div></div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Today;
