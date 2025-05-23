
import { Product } from "@/components/ProductCard";

export const products: Product[] = [
  {
    id: "ZB138",
    name: "ZB138普通平板走步机",
    description: "轻便简约，适合日常居家走步锻炼，安静耐用，轻松融入生活空间",
    image: "/img/跑步机1.jpg",
    category: "走步机"
  },
  {
    id: "ZB138A",
    name: "ZB138A跑步机",
    description: "经典家用跑步机，稳定高效，满足家庭健身的核心需求",
    image: "/img/跑步机2.jpg",
    category: "跑步机"
  },
  {
    id: "ZB-T40A",
    name: "ZB-T40A电动升降走步机",
    description: "配备电动升降系统，可灵活调节角度，满足多样锻炼需求，兼具科技感与舒适性",
    image: "/img/跑步机3.jpg",
    category: "走步机"
  }
];

export const categories = Array.from(new Set(products.map(product => product.category)));

export const featuredProducts = products.slice(0, 3);
