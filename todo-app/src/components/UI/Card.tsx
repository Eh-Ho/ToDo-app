import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-surface border border-muted flex justify-center w-full max-w-sm h-fit px-4 py-4 rounded-2xl shadow-xl inset-shadow-sm">
      {children}
    </div>
  );
};

export default Card;
