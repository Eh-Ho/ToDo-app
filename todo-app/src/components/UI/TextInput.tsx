import type { ReactNode } from "react";

interface TextInputProps {
  children?: ReactNode;
  placeHolder: string;
  button: ReactNode;
}

const TextInput = ({
  children,
  placeHolder,
  button,
  ...props
}: TextInputProps) => {
  return (
    <div
      className="
    flex w-full items-center relative rounded-lg 
    bg-surface border border-muted text-content 
    focus-within:border-primary  focus-within:ring-primary 
  "
    >
      <div className="pl-3 flex items-center justify-center shrink-0">
        {children}
      </div>

      <input
        {...props}
        placeholder={placeHolder}
        className="
      w-full bg-transparent pl-2 pr-2
      placeholder-tertiary focus:outline-none border-none ring-0
    "
      />

      <div className="flex items-center justify-center shrink-0 text-tertiary">
        {button}
      </div>
    </div>
  );
};

export default TextInput;
