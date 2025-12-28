import type { ButtonHTMLAttributes, ReactNode } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="bg-danger text-white font-medium hover:opacity-90 transition  rounded-lg  px-3.5 py-1.5 cursor-pointer"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
