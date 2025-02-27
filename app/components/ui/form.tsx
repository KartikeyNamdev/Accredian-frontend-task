import * as React from "react";
import { FormProvider, UseFormReturn, SubmitHandler } from "react-hook-form";

// Define the FormProps interface
interface FormProps<T extends Record<string>> {
  form: UseFormReturn<T>; // Pass the form object from useForm
  // The submit handler function
  children: React.ReactNode; // Form content
}

// Create the Form component
const Form = <T extends Record<string>>({ form, children }: FormProps<T>) => {
  return <FormProvider {...form}>{children}</FormProvider>;
};

// Subcomponents
const FormField = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="mb-4" {...props}>
      {children}
    </div>
  );
};

const FormItem = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="space-y-2" {...props}>
      {children}
    </div>
  );
};

const FormLabel = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLLabelElement>) => {
  return (
    <label className="block text-sm font-medium text-foreground" {...props}>
      {children}
    </label>
  );
};

const FormControl = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div {...props}>{children}</div>;
};

const FormMessage = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className="text-sm text-destructive" {...props}>
      {children}
    </p>
  );
};

// Export the Form component and its subcomponents
export { Form, FormField, FormItem, FormLabel, FormControl, FormMessage };
