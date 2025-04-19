
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ProductCard, Product } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { featuredProducts } from "@/data/products";

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-secondary/50">
        <div className="container py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Quality Products for Your Business
              </h1>
              <p className="mt-4 md:mt-6 text-lg md:text-xl text-muted-foreground">
                Family-owned and operated since 2005. We provide top-quality products 
                that meet the needs of businesses worldwide.
              </p>
              <div className="mt-6 md:mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/products">
                    Browse Products
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
              <img 
                src="/img/hero.jpg" 
                alt="Our products showcase" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
              <p className="text-muted-foreground mt-2">Our most popular products that customers love</p>
            </div>
            <Button asChild variant="ghost" size="sm" className="gap-1">
              <Link to="/products">
                View All
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} featured={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center">Why Choose Us</h2>
          <p className="text-center text-muted-foreground mt-4 mb-12 max-w-2xl mx-auto">
            We've built our reputation on these core principles that guide everything we do
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Family Values</h3>
              <p className="text-muted-foreground">
                We treat our customers like family, with personal attention and care in every interaction.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-muted-foreground">
                Every product we offer undergoes rigorous quality testing to ensure it meets our high standards.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliable Service</h3>
              <p className="text-muted-foreground">
                On-time delivery and responsive customer support you can count on whenever you need us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Work with Us?</h2>
              <p className="text-lg opacity-90 mb-8">
                Contact our team today to discuss how our products can help your business.
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Contact Us Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
