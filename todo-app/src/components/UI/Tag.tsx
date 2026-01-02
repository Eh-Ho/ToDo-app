interface TagProps {
  color:
    | "gray"
    | "red"
    | "yellow"
    | "blue"
    | "green"
    | "indigo"
    | "purple"
    | "pink";
  text: string;
}

const Tag = ({ color, text }: TagProps) => {
  const colorStyles = {
    gray: "bg-gray-400/10   text-gray-400   ring-gray-400/20",
    red: "bg-red-400/10    text-red-400    ring-red-400/20",
    yellow: "bg-yellow-400/10 text-yellow-400 ring-yellow-400/20",
    blue: "bg-blue-400/10   text-blue-400   ring-blue-400/20",
    green: "bg-green-400/10  text-green-400  ring-green-400/20",
    indigo: "bg-indigo-400/10 text-indigo-400 ring-indigo-400/20",
    purple: "bg-purple-400/10 text-purple-400 ring-purple-400/20",
    pink: "bg-pink-400/10   text-pink-400   ring-pink-400/20",
  };

  return (
    <span
      className={`
        inline-flex items-center rounded-full px-2 py-1 text-xs font-medium 
        ring-1 ring-inset /* Defines the border structure */
        ${colorStyles[color]} /* Injects the specific color classes */
      `}
    >
      {text}
    </span>
  );
};

export default Tag;
