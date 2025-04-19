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
                卓步跑步 —— 专业智能跑步机专家
              </h1>
              <p className="mt-4 md:mt-6 text-lg md:text-xl text-muted-foreground">
                自2020年成立以来，我们致力于为全球客户提供高品质的运动器材。让每一步，都更高效、更健康。
              </p>
              <div className="mt-6 md:mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/products">
                    浏览产品
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">
                    联系我们
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/5da030fc-e5ca-47d1-bddb-83a9e9fbf60d.png" 
                alt="浙江卓步运动器材有限公司 产品与服务" 
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
              <h2 className="text-3xl font-bold tracking-tight">热门产品</h2>
              <p className="text-muted-foreground mt-2">我们最受欢迎的产品</p>
            </div>
            <Button asChild variant="ghost" size="sm" className="gap-1">
              <Link to="/products">
                查看全部
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
          <h2 className="text-3xl font-bold tracking-tight text-center">为什么选择我们</h2>
          <p className="text-center text-muted-foreground mt-4 mb-12 max-w-2xl mx-auto">
            我们的核心价值观指导着我们的每一个决策
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#33C3F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">企业价值观</h3>
              <p className="text-muted-foreground">
                我们对待我们的客户像家人一样，每一步都充满关怀和关注。
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#33C3F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">品质保障</h3>
              <p className="text-muted-foreground">
                我们生产的每一件产品都经过严格的质量测试，以确保符合我们和行业的高标准。
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#33C3F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">可靠服务</h3>
              <p className="text-muted-foreground">
                我们提供准时交付和响应迅速的客户服务，您可以在任何时候依赖我们。
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
              <h2 className="text-3xl font-bold mb-4">准备与我们合作？</h2>
              <p className="text-lg opacity-90 mb-8">
                请立即联系我们的团队，讨论我们的产品如何帮助您的业务。
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">立即联系</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
