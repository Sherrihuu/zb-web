
import { Card, CardContent } from "@/components/ui/card";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export function ProductCard({ product, featured = false }: ProductCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="aspect-[4/3] relative">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full"
        />
        {featured && (
          <div className="absolute top-2 right-2">
            <span className="bg-primary text-primary-foreground text-xs py-1 px-2 rounded-md">
              Featured
            </span>
          </div>
        )}
      </div>
      <CardContent className="p-4 flex-grow">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-muted-foreground text-sm mt-2">{product.description}</p>
      </CardContent>
    </Card>
  );
}
