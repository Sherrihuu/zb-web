
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
            <h1 className="text-4xl md:text-5xl font-bold">联系我们</h1>
            <p className="mt-4 text-lg text-muted-foreground">
            有疑问或需要更多信息？我们随时为您提供帮助。
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
              <h2 className="text-3xl font-bold mb-8">开启沟通，携手并进</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">我们的位置</h3>
                    <address className="not-italic text-muted-foreground mt-1">
                    浙江省金华市婺城区白龙桥镇龙乾南街555号8幢中间2#厂房
                    </address>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">联系电话</h3>
                    <p className="text-muted-foreground mt-1">+（86） 159-7956-4037/p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">电子邮箱</h3>
                    <p className="text-muted-foreground mt-1">339131605@qq.com</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">营业时间</h3>
                    <p className="text-muted-foreground mt-1">
                      周一- 周日: 北京时间9:00 AM - 6:00 PM<br />

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
              <h2 className="text-3xl font-bold mb-8">给我们留言</h2>
              
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
                    <Label htmlFor="name">您的姓名</Label>
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
                    <Label htmlFor="email">您的邮箱</Label>
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
                    <Label htmlFor="message">留言内容</Label>
                    <Textarea 
                      id="message" 
                      rows={5}
                      {...contactRegister("message", { required: "Message is required" })}
                      placeholder="我们可以怎么帮助您?"
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
                <h3 className="text-xl font-bold mb-4">欢迎订阅我们的资讯</h3>
                <p className="text-muted-foreground mb-6">
                第一时间了解我们的新品与动态
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
                      placeholder="您的邮箱地址"
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
