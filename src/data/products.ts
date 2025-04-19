
import { Product } from "@/components/ProductCard";

export const products: Product[] = [
  {
    id: "product-1",
    name: "Premium Widget",
    description: "High-quality widget designed for maximum performance and reliability. Perfect for both professional and personal use.",
    image: "/img/product1.jpg",
    category: "Widgets"
  },
  {
    id: "product-2",
    name: "Ultra Gadget",
    description: "Our flagship gadget with innovative features that make everyday tasks easier and more efficient.",
    image: "/img/product2.jpg",
    category: "Gadgets"
  },
  {
    id: "product-3",
    name: "Standard Tool",
    description: "A reliable tool built to last. Ergonomic design and precision-engineered for professionals.",
    image: "/img/product3.jpg",
    category: "Tools"
  },
  {
    id: "product-4",
    name: "Advanced Component",
    description: "State-of-the-art component that integrates seamlessly with your existing systems.",
    image: "/img/product4.jpg",
    category: "Components"
  },
  {
    id: "product-5",
    name: "Professional Kit",
    description: "Complete set of everything you need for your professional projects. Includes carrying case.",
    image: "/img/product5.jpg",
    category: "Kits"
  },
  {
    id: "product-6",
    name: "Essential Utility",
    description: "The essential utility that no workshop should be without. Multipurpose and versatile.",
    image: "/img/product6.jpg",
    category: "Utilities"
  },
  {
    id: "product-7",
    name: "Deluxe Accessory",
    description: "Premium accessory that enhances the functionality of all our main product lines.",
    image: "/img/product7.jpg",
    category: "Accessories"
  },
  {
    id: "product-8",
    name: "Smart Solution",
    description: "Intelligent solution that adapts to your needs with minimal setup required.",
    image: "/img/product8.jpg",
    category: "Solutions"
  }
];

export const categories = Array.from(new Set(products.map(product => product.category)));

export const featuredProducts = products.slice(0, 3);
