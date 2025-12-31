import type { ReactNode } from "react";
interface TextFieldProps {
  placeHolder: string;
  children: ReactNode;
  error?: string;
  button?: ReactNode;
  type: string;
}

const TextField = ({
  error,
  placeHolder,
  children,
  type,
  button,
  ...props
}: TextFieldProps): ReactNode => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex w-full relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
          {children}
        </div>
        <input
          type={type}
          {...props}
          placeholder={placeHolder}
          className="bg-background border border-muted text-content placeholder-tertiary rounded-xl w-full pl-10 focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary"
        ></input>
        <div className="absolute inset-y-0 flex items-center right-0 pr-3 text-tertiary">
          {button}
        </div>
      </div>
      <div className="w-full text-red-500 text-sm">
        {error && <span className="">{error}</span>}
      </div>
    </div>
  );
};
export default TextField;
