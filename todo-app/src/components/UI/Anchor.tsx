import React, { type ReactNode } from "react";

interface AnchorProps {
  text : string;
  href : string;
  children? : ReactNode;
}

const Anchor = ({text, href, children}:AnchorProps) => {
  return (
    <a
      href={href}
      className="flex text-sm px-3.5 py-2.5 bg-primary rounded-full border border-muted  font-semibold text-white"
    >
      {text}
      {children}
    </a>
  );
};

export default Anchor;
