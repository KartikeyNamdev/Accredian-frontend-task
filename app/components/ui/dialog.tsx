// components/ui/dialog.tsx
import * as React from "react";

interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const Dialog = ({ open, onOpenChange, children, ...props }: DialogProps) => {
  console.log(open, onOpenChange);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-background/80 backdrop-blur-sm fixed inset-0" />
      <div className="z-50 bg-background rounded-lg shadow-lg" {...props}>
        {children}
      </div>
    </div>
  );
};

const DialogContent = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="p-6" {...props}>
      {children}
    </div>
  );
};

const DialogHeader = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="mb-4" {...props}>
      {children}
    </div>
  );
};

const DialogTitle = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2 className="text-lg font-semibold" {...props}>
      {children}
    </h2>
  );
};

const DialogDescription = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className="text-sm text-muted-foreground" {...props}>
      {children}
    </p>
  );
};

export { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription };
