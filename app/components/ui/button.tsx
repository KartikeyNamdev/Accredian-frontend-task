// components/ui/button.tsx
import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "rounded";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-secondary/50 ${
          variant === "default" &&
          "bg-primary text-primary-foreground hover:bg-primary/90"
        } ${
          variant === "destructive" &&
          "bg-destructive text-destructive-foreground hover:bg-destructive/90"
        } ${
          variant === "rounded" &&
          "bg-primary rounded-full text-primary-foreground hover:bg-primary/90"
        }  ${
          variant === "outline" &&
          "bg-transparent border border-input hover:bg-accent hover:text-accent-foreground"
        } ${
          variant === "secondary" &&
          "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        } ${
          variant === "ghost" && "hover:bg-accent hover:text-accent-foreground"
        } ${variant === "link" && "underline-offset-4 hover:underline"} ${
          size === "default" && "h-10 px-4 py-2"
        } ${size === "sm" && "h-9 rounded-md px-3"} ${
          size === "lg" && "h-11 rounded-md px-8"
        } ${size === "icon" && "h-10 w-10"} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
