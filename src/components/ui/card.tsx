import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glow?: boolean;
}

export function Card({
  className,
  hover = true,
  glow = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-surface-800 bg-surface-900/50 p-6",
        hover &&
          "transition-all duration-300 hover:border-surface-700 hover:bg-surface-850",
        glow && "hover:shadow-lg hover:shadow-brand-500/5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
