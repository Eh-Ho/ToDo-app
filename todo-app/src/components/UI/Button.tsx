import type { ButtonHTMLAttributes, ReactNode } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="bg-primary transition-colors rounded-lg  flex cursor-pointer w-full items-center  justify-center gap-2 px-4 py-2 text-sm text-white hover:bg-accent "
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
