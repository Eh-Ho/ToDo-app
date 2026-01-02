import type { ReactNode } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
interface NavLinkProps {
  to: string;
  text: string;
  children?: ReactNode;
}

const NavLink = ({ text, to, children }: NavLinkProps) => {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) => `
        flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
        ${
          isActive
            ? "bg-primary/10 text-primary shadow-sm" 
            : "text-tertiary hover:text-content hover:bg-muted/50" 
        }
      `}
    >
      <div className="size-5 shrink-0">{children}</div>
      <span>{text}</span>
    </RouterNavLink>
  );
};

export default NavLink;
