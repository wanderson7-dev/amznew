// OPTION CLASSNAME
const optionClass = "flex justify-center items-center gap-2 rounded-xl border shadow-lg transition-all p-4 sm:p-5 border-gray-400/20 shadow-black/10 hover:opacity-80";

type OptionProps = {
  onClick?: () => void,
  children: React.ReactNode,
  className?: string,
};

export default function Option({
  onClick,
  children,
  className,
}: OptionProps) {

  // OPTION CLASSNAME
  const optionClassName = className ? `${optionClass} ${className}` : optionClass;

  return (
    <button
      type="button"
      onClick={onClick}
      className={optionClassName}
    >
      {children}
    </button>
  );
  
};