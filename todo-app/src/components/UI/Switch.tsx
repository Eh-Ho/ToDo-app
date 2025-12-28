const Switch = () => {
  return (
      <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-white/5 p-px inset-ring inset-ring-white/10 outline-offset-2 outline-indigo-500 transition-colors duration-200 ease-in-out has-checked:bg-indigo-500 has-focus-visible:outline-2">
        <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
        <input
          id="agree-to-policies"
          name="agree-to-policies"
          type="checkbox"
          aria-label="Agree to policies"
          className="absolute inset-0 size-full appearance-none focus:outline-hidden"
        />
      </div>
  );
};

export default Switch;
