import {
  EllipsisHorizontalIcon,
  PencilSquareIcon,
  TrashIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
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
        <div ref={menuRef} className={`flex items-center gap-3 rounded-full `}>
          <TaskActionMenuItem onClick={() => onEdit}>
            <PencilSquareIcon className="h-5 w-auto text-accent" />
          </TaskActionMenuItem>

          <TaskActionMenuItem onClick={() => onEdit}>
            <CalendarIcon className="h-5 w-auto text-accent" />
          </TaskActionMenuItem>

          <TaskActionMenuItem onClick={() => onDelete}>
            <TrashIcon className="h-5 w-auto text-red-500" />
          </TaskActionMenuItem>
        </div>
      ) : (
        <EllipsisHorizontalIcon className="h-5 w-auto text-content cursor-pointer transition-transform duration-500" />
      )}
    </div>
  );
};

export default TaskActionMenu;
