
import { Product } from "@/components/ProductCard";

export const products: Product[] = [
  {
    id: "ZB138",
    name: "普通平板走步机",
    description: "High-quality widget designed for maximum performance and reliability. Perfect for both professional and personal use.",
    image: "/img/跑步机1.png",
    category: "走步机"
  },
  {
    id: "ZB138A",
    name: "跑步机",
    description: "Our flagship gadget with innovative features that make everyday tasks easier and more efficient.",
    image: "/img/跑步机2.png",
    category: "跑步机"
  },
  {
    id: "ZB-T40A",
    name: "电动升降走步机",
    description: "A reliable tool built to last. Ergonomic design and precision-engineered for professionals.",
    image: "/img/跑步机3.png",
    category: "走步机"
  }
];

export const categories = Array.from(new Set(products.map(product => product.category)));

export const featuredProducts = products.slice(0, 3);
