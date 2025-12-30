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
import logo from "../../assets/logo with no name.png";
import NavLink from "../UI/NavLink";
import type { Dispatch, SetStateAction } from "react";
import useTheme from "../../hooks/useTheme";
import useThemeDispatch from "../../hooks/useThemeDispatch";
import ProfileDropdown from "../UI/ProfileDropdown";
import LogoName from "../UI/LogoName";

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
        <div className="flex items-center gap-6 mx-2">
          <LogoName />
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
      <div
        className="md:hidden block cursor-pointer ml-2"
        onClick={() => setSideOpen(!sideOpen)}
      >
        {sideOpen ? (
          <XMarkIcon className="h-7 w-7 text-accent"></XMarkIcon>
        ) : (
          <Bars3Icon className="h-7 w-7 text-accent"></Bars3Icon>
        )}
      </div>
      <div className="md:hidden">
        <LogoName />
      </div>
      <div className="flex items-center">
        {theme == "dark" ? (
          <MoonIcon
            onClick={() => dispatch({ type: "setLight" })}
            className="size-5 text-tertiary mx-4 cursor-pointer"
          />
        ) : (
          <SunIcon
            onClick={() => dispatch({ type: "setDark" })}
            className="size-5 text-tertiary mx-4 cursor-pointer"
          />
        )}
        {theme == "dark" ? (
          <BellAlertIcon
            onClick={() => dispatch({ type: "setLight" })}
            className="size-5 text-tertiary mx-4 cursor-pointer"
          />
        ) : (
          <BellSlashIcon
            onClick={() => dispatch({ type: "setDark" })}
            className="size-5 text-tertiary mx-4 cursor-pointer"
          />
        )}
        <ProfileDropdown />
      </div>
    </header>
  );
};

export default AppHeader;
