import type { ReactNode } from "react";

interface AnchorProps {
  href: string;
  children?: ReactNode;
}

const Anchor = ({ href, children }: AnchorProps) => {
  return (
    <a
      href={href}
      className= "flex items-center text-sm gap-2 px-4 py-2 rounded-lg text-tertiary hover:text-primary transition-colors hover:ring-2 hover:ring-accent"
    >
      {children}
    </a>
  );
};

export default Anchor;
