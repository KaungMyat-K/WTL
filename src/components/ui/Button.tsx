import {
  cloneElement,
  isValidElement,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "ghost"
    | "outline"
    | "darkOutline"
    | "glass"
    | "submit"
    | "getInTouch"
    | "tag";
  className?: string;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  asChild?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  className = "",
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled,
  type = "button",
  rounded = "md",
  asChild = false,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap";

  const roundedStyles = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    full: "rounded-full",
  };

  const variantStyles = {
    primary:
      "bg-secondary hover:bg-secondary/80 text-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 focus:ring-secondary/50",
    secondary:
      "bg-gray-200 hover:bg-gray-300 text-gray-800 shadow-md hover:shadow-md transition-all duration-300 hover:scale-105 focus:ring-gray-400",
    ghost:
      "text-gray-600 hover:text-secondary hover:bg-secondary/10 transition-all duration-300 hover:scale-105",
    outline:
      "border-2 border-white text-white transition-all duration-300 hover:scale-105 focus:ring-secondary/50",
    darkOutline:
      "border border-gray-900 text-gray-900 hover:border-secondary hover:bg-secondary hover:text-white transition-all duration-300 focus:ring-secondary/50",
    glass:
      "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-secondary/30 transition-all duration-300 hover:scale-105 shadow-[0_8px_32px_rgba(0,0,0,0.1)] focus:ring-secondary/50",
    submit:
      "border-2 border-secondary text-secondary font-semibold hover:bg-secondary/80 hover:border-secondary hover:text-white transition-all duration-300 disabled:opacity-50",
    getInTouch:
      "border-2 border-white text-white hover:bg-white hover:text-secondary transition-all duration-300 focus:ring-white/50",
    tag: "px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 bg-transparent hover:bg-secondary text-gray-800 hover:text-white rounded-full text-xs sm:text-xs md:text-base lg:text-base font-medium transition-all duration-300 border border-gray-800 hover:border-secondary hover:scale-105 hover:shadow-lg",
  };

  const widthStyles = fullWidth ? "w-full" : "";
  const hasDisplayClass =
    className.includes("hidden") ||
    className.includes("inline-flex") ||
    className.includes("flex");
  const displayStyles = hasDisplayClass ? "" : baseStyles;

  const combinedClassName = `
    ${displayStyles}
    ${roundedStyles[rounded]}
    ${variantStyles[variant]}
    ${widthStyles}
    ${className}
  `.trim();

  if (asChild && isValidElement(children)) {
    const childProps = children.props as { className?: string };
    return cloneElement(children, {
      ...props,
      className: `${combinedClassName} ${childProps.className || ""}`.trim(),
    } as any);
  }

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={combinedClassName}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin h-4 w-4 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {leftIcon && !isLoading && (
        <span className="flex-shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
    </button>
  );
};

export default Button;
