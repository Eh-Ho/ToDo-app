import { CheckIcon } from "@heroicons/react/24/solid";

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  color:string;
}

const Checkbox = ({ checked, color, onChange }: CheckboxProps) => {
  return (
    <button
      onClick={onChange}
      className={`
        flex items-center justify-center shrink-0
        size-5 rounded-md border transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-primary/20
        ${
          checked
            ? `bg-${color} border${color} text-white shadow-sm`
            : `bg-transparent border-tertiary hover:border${color} hover:bg-primary/5`
        }
      `}
    >
      <CheckIcon
        className={`
          size-3.5 
          transition-transform duration-200 
          ${checked ? "scale-100" : "scale-0"}
        `}
      />
    </button>
  );
};

export default Checkbox;
