import NavLink from "../UI/NavLink";
import {
  CalendarIcon,
  ListBulletIcon,
  CheckIcon,
  RectangleStackIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

interface AppSidebarProps {
  sideOpen : boolean;
}

const AppSidebar = ({sideOpen} : AppSidebarProps) => {
  return (
    <div className={`bg-background/80 border-r border-muted ${sideOpen?"fixed":"hidden"} inset-y-0 pt-20 left-0 w-60 z-40`}>
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
        <NavLink href="#" text="calender">
          <CalendarIcon />
        </NavLink>
      </div>
    </div>
  );
};

export default AppSidebar;
