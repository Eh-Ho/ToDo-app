import NavLink from "../UI/NavLink";
import {
  CalendarIcon,
  ListBulletIcon,
  CheckIcon,
  RectangleStackIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import type { Dispatch, SetStateAction } from "react";

interface AppSidebarProps {
  sideOpen: boolean;
  setSideOpen: Dispatch<SetStateAction<boolean>>;
}

const AppSidebar = ({ sideOpen, setSideOpen }: AppSidebarProps) => {
  return (
    <>
      <div
        onClick={() => setSideOpen(!sideOpen)}
        className={`
          fixed inset-0 z-30 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden
          ${
            sideOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      />
      <div
        className={`bg-background/80 border-r border-muted transition-transform duration-500 ease-in-out md:-translate-x-full${
          sideOpen ? "translate-x-0" : "-translate-x-full hidden"
        } fixed inset-y-0 pt-5 left-0 w-60 z-50 md:hidden flex flex-col justify-between`}
      >
        <div className="flex flex-col w-full px-2 gap-4">
          <NavLink to="/today" text="Today">
            <CheckIcon />
          </NavLink>
          <NavLink to="/tasks" text="Tasks">
            <RectangleStackIcon />
          </NavLink>
          <NavLink to="/lists" text="Lists">
            <ListBulletIcon />
          </NavLink>
          <NavLink to="/calendar" text="calendar">
            <CalendarIcon />
          </NavLink>
        </div>
        <div className="border-t border-muted flex flex-col w-full px-2 gap-4 py-5">
          <NavLink to="/profile" text="Profile">
            <UserCircleIcon />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AppSidebar;
