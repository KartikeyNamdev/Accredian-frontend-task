import * as React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  return <button className={className}>{children}</button>;
}
