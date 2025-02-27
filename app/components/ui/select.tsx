import * as React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: { value: string; label: string }[]; // Optional array of options
  className?: string; // Allow custom styles
  error?: string; // Error message for validation
}

// The main Select component with ref support
const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = "", options = [], error, children, ...props }, ref) => {
    return (
      <div className="relative flex flex-col">
        <select
          ref={ref}
          className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background 
          placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
          focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
          {...props}
        >
          {children
            ? children // If children exist, render them (allows custom options)
            : options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
        </select>
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";

const SelectTrigger = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      {...props}
    >
      {children}
    </div>
  );
};

const SelectContent = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className="absolute z-50 mt-2 w-full rounded-md border bg-background shadow-lg"
      {...props}
    >
      {children}
    </div>
  );
};

const SelectItem = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground"
      {...props}
    >
      {children}
    </div>
  );
};

const SelectValue = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className="ml-2" {...props}>
      {children}
    </span>
  );
};

export { Select, SelectTrigger, SelectContent, SelectItem, SelectValue };
