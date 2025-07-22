import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from 'sonner';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }).max(50, {
    message: "Name must not be longer than 50 characters.",
  }),
  email: z.string().email({
    message: "Please, enter a valid email address.",
  }),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
    message: "Please enter a valid phone number (e.g., +1234567890).",
  }).optional().or(z.literal('')), // Make phone optional but validate if provided
  companyName: z.string().max(100, {
    message: "Company name must not be longer than 100 characters.",
  }).optional().or(z.literal('')),
  productType: z.string().min(1, {
    message: "Please select a product type.",
  }),
  quantity: z.string().regex(/^\d+$/, {
    message: "Quantity must be a number.",
  }).transform(Number).refine(val => val > 0, {
    message: "Quantity must be greater than 0.",
  }),
  requirements: z.string().max(500, {
    message: "Requirements must not be longer than 500 characters.",
  }).optional().or(z.literal('')),
});

const productTypes = [
  "Corrugated Boxes",
  "Duplex Corrugated Boxes",
  "E-Flute Corrugated Boxes",
  "Printed Cartons",
  "Mono Cartons",
  "Punching Boxes",
  "Heavy Duty Boxes",
  "Fruit Packing Boxes",
  "Other",
];

const GetQuote: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      companyName: "",
      productType: "",
      quantity: 0,
      requirements: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Quote Request Submitted:", values);
    toast.success("Your quote request has been submitted successfully! We will contact you soon.");
    form.reset(); // Reset the form after successful submission
    navigate('/'); // Redirect to the main page
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto bg-card p-8 rounded-lg shadow-lg border border-border text-black">
          <h2 className="text-3xl font-bold text-center mb-6 text-card-foreground">Request a Custom Quote</h2>
          <p className="text-center text-muted-foreground mb-8">
            Tell us about your packaging needs, and we'll get back to you with a personalized quote.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john.doe@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number (Optional)</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="+1234567890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Acme Corp" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="productType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type of Packaging Needed</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a product type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {productTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estimated Quantity</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 1000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="requirements"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Specific Requirements (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., dimensions, material, printing details, special features..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Submit Quote Request
              </Button>
            </form>
          </Form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GetQuote;