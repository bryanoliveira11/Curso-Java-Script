import { Link } from "react-router-dom";
import { Product } from "./Product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="p-4 rounded shadow-md border border-gray-200">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-32 mb-2"
        />
        <h2 className="font-bold">{product.title}</h2>
        <p>$ {product.price}</p>
      </Link>
    </div>
  );
}
