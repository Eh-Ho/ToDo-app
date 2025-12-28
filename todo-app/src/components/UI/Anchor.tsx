import type {ReactNode} from "react";

interface AnchorProps {
  text: string;
  href: string;
  children?: ReactNode;
}

const Anchor = ({ text, href, children }: AnchorProps) => {
  return (
    <a
      href={href}
      className="flex text-sm px-3.5 py-2.5 bg-primary font-medium hover:opacity-90 transition shadow-lg  rounded-full text-white"
    >
      {text}
      {children}
    </a>
  );
};

export default Anchor;
