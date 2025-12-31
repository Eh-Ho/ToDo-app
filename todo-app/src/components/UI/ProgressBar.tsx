interface ProgressBarProps {
  progress: number; 
  className?: string; 
  colorClass?: string;
}

const ProgressBar = ({
  progress,
  className = "",
  colorClass = "bg-primary", 
}: ProgressBarProps) => {
  const safeProgress = Math.min(100, Math.max(0, progress));

  return (
    <div
      className={`
        w-full h-1.5 bg-muted/50 rounded-full overflow-hidden 
        ${className}
      `}
    >
      <div
        className={`h-full rounded-full transition-all duration-500 ease-out ${colorClass}`}
        style={{ width: `${safeProgress}%` }}
      />
    </div>
  );
};

export default ProgressBar;