import * as React from "react";

// Accordion Root Component
interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  children: React.ReactNode;
}

// Define our own custom props without extending HTMLAttributes
interface AccordionItemCustomProps {
  value: string;
  openItems?: string | string[];
  onToggle?: (value: string) => void;
}

// Combine our custom props with div element props
interface AccordionItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onToggle">,
    AccordionItemCustomProps {
  children: React.ReactNode;
}

// Define a common interface for components that can receive isOpen and onToggle
interface AccordionChildProps {
  isOpen?: boolean;
  onToggle?: () => void;
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ type = "single", defaultValue, children, ...props }, ref) => {
    const [openItems, setOpenItems] = React.useState<string | string[]>(
      defaultValue || (type === "single" ? "" : [])
    );

    const handleToggle = (value: string) => {
      if (type === "single") {
        setOpenItems(openItems === value ? "" : value);
      } else {
        setOpenItems((prev) =>
          Array.isArray(prev)
            ? prev.includes(value)
              ? prev.filter((item) => item !== value)
              : [...prev, value]
            : [value]
        );
      }
    };

    return (
      <div ref={ref} {...props}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              openItems,
              onToggle: handleToggle,
            } as React.JSX.IntrinsicAttributes);
          }
          return child;
        })}
      </div>
    );
  }
);

Accordion.displayName = "Accordion";

// AccordionItem Component
const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value, openItems, onToggle, children, ...props }, ref) => {
    const isOpen = Array.isArray(openItems)
      ? openItems.includes(value)
      : openItems === value;

    return (
      <div ref={ref} className="border-b" {...props}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              isOpen,
              onToggle: () => onToggle?.(value),
            } as React.JSX.IntrinsicAttributes);
          }
          return child;
        })}
      </div>
    );
  }
);

AccordionItem.displayName = "AccordionItem";

// AccordionTrigger Component
interface AccordionTriggerProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onToggle">,
    AccordionChildProps {
  children: React.ReactNode;
}

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ isOpen, onToggle, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className="flex w-full items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg:rotate-180"
      onClick={onToggle}
      aria-expanded={isOpen}
      {...props}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 transition-transform duration-200"
        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>
  );
});

AccordionTrigger.displayName = "AccordionTrigger";

// AccordionContent Component
interface AccordionContentProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onToggle">,
    AccordionChildProps {
  children: React.ReactNode;
}

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ isOpen, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className="overflow-hidden transition-all"
      style={{
        maxHeight: isOpen ? "1000px" : "0",
        opacity: isOpen ? 1 : 0,
      }}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </div>
  );
});

AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
