
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold">FB</span>
            </div>
            <span className="font-bold">Family Business</span>
          </Link>
          <nav className="ml-auto flex gap-4 md:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t bg-secondary">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Family Business</h3>
              <p className="text-muted-foreground mb-4">
                Quality products for your needs. Family owned and operated since 2005.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-muted-foreground hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <address className="not-italic">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin size={16} />
                  <span>123 Business Street, City, Country</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Phone size={16} />
                  <span>+1 (123) 456-7890</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail size={16} />
                  <span>info@familybusiness.com</span>
                </div>
              </address>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} Family Business. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
