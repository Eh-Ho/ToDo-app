import {
  EllipsisHorizontalIcon,
  PencilSquareIcon,
  TrashIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";
import { useState, useRef, useEffect } from "react";
import TaskActionMenuItem from "./TaskActionMenuItem";

interface TaskActionMenuProps {
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskActionMenu = ({ onEdit, onDelete }: TaskActionMenuProps) => {
  const [actionMenuOpen, setActionMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActionMenuOpen(false);
      }
    };

    if (menuRef) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [actionMenuOpen]);

  return (
    <div onClick={() => setActionMenuOpen(!actionMenuOpen)}>
      {actionMenuOpen ? (
        <div ref={menuRef} className={`flex gap-3`}>

          <TaskActionMenuItem onClick={() => onEdit}>
            <PencilSquareIcon className="size-5 text-primary" />
          </TaskActionMenuItem>

          <TaskActionMenuItem onClick={() => onEdit}>
            <CalendarIcon className="size-5 text-primary" />
          </TaskActionMenuItem>

          <TaskActionMenuItem onClick={() => onDelete}>
            <TrashIcon className="size-5 text-primary" />
          </TaskActionMenuItem>

        </div>
      ) : (
        <EllipsisHorizontalIcon className="size-6 text-tertiary cursor-pointer transition-transform duration-500" />
      )}
    </div>
  );
};

export default TaskActionMenu;
