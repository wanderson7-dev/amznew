import { Loader2 } from "lucide-react";

// CONTENT CLASS
const contentClass = "flex justify-center items-center gap-2.5 w-full p-5 shadow-lg bg-[#DB8300] hover:opacity-80 transition-all rounded-xl text-white font-semibold text-center disabled:bg-gray-300 disabled:opacity-50";

type ButtonProps = {
  icon?: React.ReactNode,
  active?: boolean,
  onClick?: () => void,
  disabled?: boolean,
  children: React.ReactNode,
  className?: string,
  type?: "button" | "submit" | "reset",
};

export default function Button({
  icon,
  active,
  onClick,
  disabled,
  children,
  className,
  type = "button",
}: ButtonProps) {

  // OPTION CLASSNAME
  const contentClassName = className ? `${contentClass} ${className}` : contentClass;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || active}
      className={contentClassName}
    >
      {active ? (
        <Loader2 className="size-5 animate-spin" />
      ) : (
        icon || null
      )}
      {children}
    </button>
  );
}