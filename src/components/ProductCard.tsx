
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
      <CardFooter className="p-4 pt-0">
        <Button asChild variant="outline" className="w-full">
          <Link to={`/products#${product.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
