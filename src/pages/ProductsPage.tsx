
import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { Button } from "@/components/ui/button";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary/50 py-12 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold">我们的产品</h1>
            <p className="mt-4 text-lg text-muted-foreground">
            浏览我们为您精心打造的高品质产品全目录，满足多样化运动需求
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container">
          {/* Category Filter */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">筛选</h2>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} id={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium">No products found</h3>
              <p className="text-muted-foreground mt-2">
                Try selecting a different category or check back later for new products.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">想要了解更多信息?</h2>
            <p className="text-lg text-muted-foreground mb-8">
            我们的团队随时准备解答您对产品的任何疑问，帮助您找到最合适的解决方案。
            </p>
            <Button asChild size="lg">
              <a href="/contact">联系我们</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductsPage;
