import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
  className?: string;
  href?: string;
}

export type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  children,
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-[background-color,border-color,color,transform] duration-[140ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-void disabled:pointer-events-none active:translate-y-px";

  const variants = {
    primary:
      "bg-lime text-void hover:bg-lime-lift active:bg-lime-press disabled:bg-shelf disabled:text-ash disabled:border disabled:border-rule",
    secondary:
      "bg-transparent text-bone border border-rule hover:border-lime hover:text-lime disabled:border-rule disabled:text-rule",
    outline:
      "bg-transparent text-bone border border-rule hover:border-lime hover:text-lime disabled:border-rule disabled:text-rule",
    ghost:
      "bg-transparent text-bone hover:text-lime disabled:text-rule",
  };

  const sizes = {
    sm: "h-9 px-4 text-small",
    md: "h-11 px-7 text-body",
    lg: "h-14 px-8 text-subhead",
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

  const content = (
    <>
      {isLoading ? (
        <>
          <span className="flex gap-1" aria-hidden>
            <span className="loading-dot h-1.5 w-1.5 rounded-full bg-current" />
            <span className="loading-dot h-1.5 w-1.5 rounded-full bg-current" />
            <span className="loading-dot h-1.5 w-1.5 rounded-full bg-current" />
          </span>
          Loading
        </>
      ) : (
        <>
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
}
