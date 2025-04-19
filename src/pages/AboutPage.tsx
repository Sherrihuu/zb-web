
import { Layout } from "@/components/Layout";

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary/50 py-12 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold">About Our Company</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A family business dedicated to quality, reliability, and exceptional service since 2005.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2005 by the Chen family, our company began as a small workshop 
                  producing specialized components for local businesses. With dedication to 
                  quality and customer service, we quickly grew to become a trusted name in the industry.
                </p>
                <p>
                  Through the years, we expanded our product lines while maintaining our 
                  commitment to excellent craftsmanship and personal customer relationships. 
                  Today, we serve clients across the country and internationally, but still 
                  operate with the same family values that guided us from day one.
                </p>
                <p>
                  Our team now includes second-generation family members working alongside 
                  industry experts, combining traditional knowledge with modern innovation 
                  to deliver products that meet the evolving needs of our customers.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img 
                src="/img/about-story.jpg" 
                alt="Our company history" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission & Values</h2>
            <p className="text-lg mb-12">
              We're driven by our commitment to excellence and guided by core values that define everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide high-quality products that help our customers succeed, 
                while maintaining the personal touch and reliability that comes from 
                being a family-owned business.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Core Values</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><span className="font-medium text-foreground">Quality</span>: Excellence in every product</li>
                <li><span className="font-medium text-foreground">Integrity</span>: Honest business practices</li>
                <li><span className="font-medium text-foreground">Service</span>: Putting customers first</li>
                <li><span className="font-medium text-foreground">Innovation</span>: Constant improvement</li>
                <li><span className="font-medium text-foreground">Family</span>: Working together with respect</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                <img 
                  src="/img/team-1.jpg" 
                  alt="Chen Wei, Founder & CEO" 
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold">Chen Wei</h3>
              <p className="text-muted-foreground">Founder & CEO</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                <img 
                  src="/img/team-2.jpg" 
                  alt="Lin Mei, Operations Director" 
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold">Lin Mei</h3>
              <p className="text-muted-foreground">Operations Director</p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                <img 
                  src="/img/team-3.jpg" 
                  alt="Chen Jian, Product Development" 
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold">Chen Jian</h3>
              <p className="text-muted-foreground">Product Development</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
