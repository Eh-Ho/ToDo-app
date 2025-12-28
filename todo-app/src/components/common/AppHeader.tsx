import {
  BellIcon,
  Bars3Icon,
  XMarkIcon,
  CalendarIcon,
  ListBulletIcon,
  CheckIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";
import logo from "../../assets/logo with no name.png";

import user from "../../assets/user.png";
import NavLink from "../UI/NavLink";
import Button from "../UI/Button";
import type { Dispatch, SetStateAction } from "react";

interface AppHeaderProps {
  sideOpen: boolean;
  setSideOpen: Dispatch<SetStateAction<boolean>>;
}

const AppHeader = ({ sideOpen, setSideOpen }: AppHeaderProps) => {
  return (
    <header className=" w-screen h-15 bg-surface/80 shadow-sm backdrop-blur-md border-muted border-b flex items-center justify-between sticky z-50 top-0 ">
      <div className="hidden md:block ">
        <div className="flex items-center gap-6">
          <NavLink href="#" text="Today">
            <CheckIcon />
          </NavLink>
          <NavLink href="#" text="Tasks">
            <RectangleStackIcon />
          </NavLink>
          <NavLink href="#" text="Lists">
            <ListBulletIcon />
          </NavLink>
          <NavLink href="#" text="calender">
            <CalendarIcon />
          </NavLink>
        </div>
      </div>
      <div className="md:hidden block">
        <Button onClick={() => setSideOpen(!sideOpen)}>
          {sideOpen ? (
            <XMarkIcon className="h-7 w-7 text-accent"></XMarkIcon>
          ) : (
            <Bars3Icon className="h-7 w-7 text-accent"></Bars3Icon>
          )}
        </Button>
      </div>
      <div className="flex items-center">
        <img src={logo} className="h-12 w-auto"></img>
      </div>
      <div className="hidden md:flex  items-center">
        <BellIcon className="h-6 w-6 text-tertiary mx-2" />
        <img src={user} className="h-10 w-10 rounded-full mr-5 ml-2"></img>
      </div>
    </header>
  );
};

export default AppHeader;
