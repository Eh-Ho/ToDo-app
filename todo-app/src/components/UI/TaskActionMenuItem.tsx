import type { ReactNode } from "react";

interface TaskActionMenuItemProps {
  children: ReactNode;
  onClick: () => void;
}

const TaskActionMenuItem = ({ children, onClick }: TaskActionMenuItemProps) => {
  return (
    <div
      onClick={onClick}
      className="px-1 cursor-pointer"
    >
      {children}
    </div>
  );
};

export default TaskActionMenuItem;
