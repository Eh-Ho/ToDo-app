import type { ButtonHTMLAttributes, ReactNode } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="bg-primary text-white font-medium hover:opacity-90 transition shadow-lg  rounded-full  px-3.5 py-1.5 cursor-pointer"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
