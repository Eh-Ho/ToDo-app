import type { ReactNode } from "react";
import Card from "./Card";
import type { Task } from "../../types/Task";
import ProgressBar from "./ProgressBar";
import ListIcon from "./ListIcon";
import Button from "./Button";
import { PlusIcon } from "@heroicons/react/24/outline";

interface ListCardProps {
  name: string;
  color: string;
  iconName: string;
  tasks: Task[];
}

const ListCard = ({ name, color, iconName, tasks }: ListCardProps) => {
  return (
    <Card>
      <div className="w-full flex flex-col">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold flex items-center gap-1">
            <ListIcon iconName={iconName} color={`text-${color}`} />
            {name}
          </h2>
          <span className="text-tertiary text-sm ">1 of 6 completed</span>
        </div>
        <ProgressBar
          colorClass={`bg-${color}-500`}
          className="my-1"
          progress={23}
        />
        <div className=""></div>
        <div className="flex justify-between items-center">
          <span className="text-tertiary text-sm ">6 tasks</span>
          <div>
            <Button>
              <PlusIcon className="size-5 text-tertiary" />
              <span>Add task</span>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ListCard;
