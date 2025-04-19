
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  MapPin, Phone, Mail, Clock, AlertCircle, Check, Loader2 
} from "lucide-react";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

interface NewsletterFormValues {
  email: string;
}

const ContactPage = () => {
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactError, setContactError] = useState(false);
  
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterError, setNewsletterError] = useState(false);
  
  const { 
    register: contactRegister, 
    handleSubmit: contactHandleSubmit,
    formState: { errors: contactErrors },
    reset: contactReset
  } = useForm<ContactFormValues>();
  
  const { 
    register: newsletterRegister, 
    handleSubmit: newsletterHandleSubmit,
    formState: { errors: newsletterErrors },
    reset: newsletterReset
  } = useForm<NewsletterFormValues>();

  const onContactSubmit = async (data: ContactFormValues) => {
    setContactSubmitting(true);
    setContactError(false);
    
    try {
      // In a real app, you would replace this URL with your actual form endpoint
      const response = await fetch("https://formspree.io/f/xvoeryzb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setContactSuccess(true);
        contactReset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setContactError(true);
    } finally {
      setContactSubmitting(false);
    }
  };

  const onNewsletterSubmit = async (data: NewsletterFormValues) => {
    setNewsletterSubmitting(true);
    setNewsletterError(false);
    
    try {
      // In a real app, you would replace this URL with your actual form endpoint
      const response = await fetch("https://formspree.io/f/xzbwpdvl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setNewsletterSuccess(true);
        newsletterReset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setNewsletterError(true);
    } finally {
      setNewsletterSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary/50 py-12 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Have questions or need more information? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Our Location</h3>
                    <address className="not-italic text-muted-foreground mt-1">
                      123 Business Street<br />
                      City, Province/State<br />
                      Country, Postal Code
                    </address>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground mt-1">+1 (123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground mt-1">info@familybusiness.com</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Business Hours</h3>
                    <p className="text-muted-foreground mt-1">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Map (placeholder) */}
              <div className="mt-8 aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <img 
                  src="/img/map.jpg" 
                  alt="Company location" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
              
              {contactSuccess ? (
                <Alert className="bg-green-50 border-green-200 mb-6">
                  <Check className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    Thank you for your message! We'll get back to you soon.
                  </AlertDescription>
                </Alert>
              ) : null}
              
              {contactError ? (
                <Alert variant="destructive" className="mb-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    There was an error sending your message. Please try again.
                  </AlertDescription>
                </Alert>
              ) : null}
              
              <form onSubmit={contactHandleSubmit(onContactSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input 
                      id="name" 
                      {...contactRegister("name", { required: "Name is required" })}
                      placeholder="John Doe"
                    />
                    {contactErrors.name && (
                      <p className="text-sm text-destructive">{contactErrors.name.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      {...contactRegister("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      placeholder="john.doe@example.com"
                    />
                    {contactErrors.email && (
                      <p className="text-sm text-destructive">{contactErrors.email.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      rows={5}
                      {...contactRegister("message", { required: "Message is required" })}
                      placeholder="How can we help you?"
                    />
                    {contactErrors.message && (
                      <p className="text-sm text-destructive">{contactErrors.message.message}</p>
                    )}
                  </div>
                </div>
                
                <Button type="submit" className="w-full" disabled={contactSubmitting}>
                  {contactSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
              
              {/* Newsletter Signup */}
              <div className="mt-12 pt-12 border-t">
                <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-muted-foreground mb-6">
                  Stay updated with our latest products and company news.
                </p>
                
                {newsletterSuccess ? (
                  <Alert className="bg-green-50 border-green-200 mb-6">
                    <Check className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      Thank you for subscribing to our newsletter!
                    </AlertDescription>
                  </Alert>
                ) : null}
                
                {newsletterError ? (
                  <Alert variant="destructive" className="mb-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      There was an error subscribing. Please try again.
                    </AlertDescription>
                  </Alert>
                ) : null}
                
                <form onSubmit={newsletterHandleSubmit(onNewsletterSubmit)} className="flex gap-2">
                  <div className="flex-grow">
                    <Input 
                      {...newsletterRegister("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      placeholder="Your email address"
                      className="w-full"
                    />
                    {newsletterErrors.email && (
                      <p className="text-sm text-destructive mt-1">{newsletterErrors.email.message}</p>
                    )}
                  </div>
                  <Button type="submit" disabled={newsletterSubmitting}>
                    {newsletterSubmitting ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      "Subscribe"
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
