"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import SuccessAlert from "@/components/success-alert";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const whatsappNumber = "917012445960";
    const message = `*Name:* ${values.name}\n*Email:* ${values.email}\n*Message:* ${values.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
    setIsAlertOpen(true);
  }

  const handleAlertClose = () => {
    setIsAlertOpen(false);
    form.reset();
  }

  return (
    <>
      <Card className="bg-black border-neutral-800">
          <CardHeader>
              <CardTitle className="text-white text-2xl text-center">Send me a message</CardTitle>
          </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-300">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} className="bg-neutral-900 border-neutral-700 text-white focus:ring-primary" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-300">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} className="bg-neutral-900 border-neutral-700 text-white focus:ring-primary"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-300">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your message..."
                        {...field}
                        className="bg-neutral-900 border-neutral-700 text-white min-h-[150px] focus:ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-center">
                <Button type="submit" className="w-1/2 bg-primary hover:bg-primary/90 text-white">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {isAlertOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <SuccessAlert
                  title="Message Ready"
                  description="Your message is ready to be sent. Please continue in WhatsApp."
                  onClose={handleAlertClose}
              />
          </div>
      )}
    </>
  );
}
