import {
  Bars3Icon,
  XMarkIcon,
  CalendarIcon,
  ListBulletIcon,
  CheckIcon,
  RectangleStackIcon,
  BellAlertIcon,
  BellSlashIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

import user from "../../assets/user.png";
import NavLink from "../UI/NavLink";
import Button from "../UI/Button";
import type { Dispatch, SetStateAction } from "react";
import useTheme from "../../hooks/useTheme";
import useThemeDispatch from "../../hooks/useThemeDispatch";
interface AppHeaderProps {
  sideOpen: boolean;
  setSideOpen: Dispatch<SetStateAction<boolean>>;
}

const AppHeader = ({ sideOpen, setSideOpen }: AppHeaderProps) => {
  const theme = useTheme();
  const dispatch = useThemeDispatch();
  return (
    <header className=" w-screen h-15 bg-surface/80 shadow-sm backdrop-blur-md border-muted border-b flex items-center justify-between sticky z-30 top-0 ">
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
        {theme == "dark" ? (
          <Button onClick={() => dispatch({ type: "setLight" })}>
            <MoonIcon className="size-5 text-tertiary mx-1" />
          </Button>
        ) : (
          <Button onClick={() => dispatch({ type: "setDark" })}>
            <SunIcon className="size-5 text-tertiary mx-1" />
          </Button>
        )}
        {theme == "dark" ? (
          <Button onClick={() => dispatch({ type: "setLight" })}>
            <BellAlertIcon className="size-5 text-tertiary mx-1" />
          </Button>
        ) : (
          <Button onClick={() => dispatch({ type: "setDark" })}>
            <BellSlashIcon className="size-5 text-tertiary mx-1" />
          </Button>
        )}
        <img src={user} className="h-10 w-10 rounded-full mr-5 ml-1"></img>
      </div>
    </header>
  );
};

export default AppHeader;
