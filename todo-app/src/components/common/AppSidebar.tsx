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
          fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden
          ${
            sideOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      />
      <div
        className={`bg-background/80 border-r border-muted ${
          sideOpen ? "fixed" : "hidden"
        } inset-y-0 pt-5 left-0 w-60 z-50`}
      >
        <div className="flex flex-col w-full px-2 gap-2">
          <NavLink href="#" text="Profile">
            <UserCircleIcon />
          </NavLink>
          <NavLink href="#" text="Today">
            <CheckIcon />
          </NavLink>
          <NavLink href="#" text="Tasks">
            <RectangleStackIcon />
          </NavLink>
          <NavLink href="#" text="Lists">
            <ListBulletIcon />
          </NavLink>
          <NavLink href="#" text="calendar">
            <CalendarIcon />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AppSidebar;
