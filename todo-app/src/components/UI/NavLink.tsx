import type { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  text: string;
  children?: ReactNode;
}

const NavLink = ({ text, href, children }: NavLinkProps) => {
  return (
    <a
      href={href}
      className="text-content text-sm bg-transparent  border-muted px-2.5 py-1.5 font-medium hover:text-primary transition-colors  rounded-lg "
    >
      <div className="flex items-center gap-2 ">
        <div className="h-5 w-5">{children}</div>
        <span>{text}</span>
      </div>
    </a>
  );
};

export default NavLink;
