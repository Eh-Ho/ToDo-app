import cn from "../../utils/conditionalStyle";
import type { ButtonHTMLAttributes, ReactNode } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: string;
  children: ReactNode;
}

const Button = ({ mode, children, ...props }: ButtonProps) => {
  return (
    <button
      className="bg-primary text-white font-medium hover:opacity-90 transition shadow-lg  rounded-full  px-5 py-1 cursor-pointer"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
