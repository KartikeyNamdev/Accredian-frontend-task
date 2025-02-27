"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Check, Loader2 } from "lucide-react";
import { ControllerRenderProps } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const formSchema = z.object({
  referrerName: z.string().min(2, "Name must be at least 2 characters"),
  referrerEmail: z.string().email("Invalid email address"),
  referrerPhone: z.string().min(10, "Phone number must be at least 10 digits"),
  refereeName: z.string().min(2, "Name must be at least 2 characters"),
  refereeEmail: z.string().email("Invalid email address"),
  refereePhone: z.string().min(10, "Phone number must be at least 10 digits"),
  program: z.string().min(1, "Please select a program"),
  expectedJoiningDate: z
    .string()
    .min(1, "Please select an expected joining date"),
});

interface ReferModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ReferModal({ open, onOpenChange }: ReferModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      referrerName: "",
      referrerEmail: "",
      referrerPhone: "",
      refereeName: "",
      refereeEmail: "",
      refereePhone: "",
      program: "",
      expectedJoiningDate: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      console.log(values);
      setIsSuccess(true);
      setTimeout(() => {
        form.reset();
        setIsSuccess(false);
        onOpenChange(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-6 text-gray-600">
        <DialogHeader>
          <DialogTitle className="text-gray-600 pb-4">
            Refer a Friend
          </DialogTitle>
          <DialogDescription>
            <p className="text-gray-600">
              {" "}
              Fill in the details below to refer someone to our programs{" "}
            </p>
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
              <Check className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold">Referral Submitted!</h3>
            <p className="text-sm text-muted-foreground text-center">
              Thank you for your referral. We &apos ll process it and get in
              touch with your friend soon.
            </p>
          </div>
        ) : (
          <Form form={form} onSubmit={onSubmit}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-sm font-semibold">Your Details</h4>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="referrerName"
                    render={({ field }: { field: ControllerRenderProps }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="referrerEmail"
                    render={({ field }: { field: ControllerRenderProps }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="referrerPhone"
                    render={({ field }: { field: ControllerRenderProps }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-semibold">Friends Details</h4>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="refereeName"
                    render={({ field }: { field: ControllerRenderProps }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Friend's name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="refereeEmail"
                    render={({ field }: { field: ControllerRenderProps }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Friend's email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="refereePhone"
                    render={({ field }: { field: ControllerRenderProps }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Friend's phone number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-semibold">Program Details</h4>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="program"
                    render={({ field }: { field: ControllerRenderProps }) => (
                      <FormItem>
                        <FormLabel>Program</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a program" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="product-management">
                              Product Management
                            </SelectItem>
                            <SelectItem value="data-science">
                              Data Science
                            </SelectItem>
                            <SelectItem value="business-analytics">
                              Business Analytics
                            </SelectItem>
                            <SelectItem value="digital-transformation">
                              Digital Transformation
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="expectedJoiningDate"
                    render={({ field }: { field: ControllerRenderProps }) => (
                      <FormItem>
                        <FormLabel>Expected Joining Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Referral"
                )}
              </Button>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}
