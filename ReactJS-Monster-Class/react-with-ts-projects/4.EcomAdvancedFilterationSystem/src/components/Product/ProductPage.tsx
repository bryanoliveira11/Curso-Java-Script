import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../MainContent/Product";
import axios from "axios";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsStarFill } from "react-icons/bs";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = React.useState<Product | null>(null);

  React.useEffect(() => {
    if (id) {
      axios
        .get<Product>(`https://dummyjson.com/products/${id}`)
        .then((res) => setProduct(res.data))
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  if (!product) return <h1>Loading...</h1>;

  return (
    <div className="p-5 w-[60%]">
      <button
        onClick={() => navigate(-1)}
        className="mb-5 px-4 py-2
    bg-neutral text-white rounded cursor-pointer"
      >
        Back
      </button>

      <img
        src={product.images[0]}
        alt={product.title}
        className="w-[50%] h-auto
    mb-5"
      />
      <h1 className="text-2xl mb-4 font-bold">{product.title}</h1>
      <p className="mb-4 text-gray-700 w-[70%]">{product.description}</p>
      <div className="flex">
        <p className="flex">
          <AiFillDollarCircle size={20} className="mr-2" /> $ {product.price}
        </p>
        <p className="ml-10 flex">
          <BsStarFill size={20} className="mr-2"/> {product.rating}
        </p>
      </div>
    </div>
  );
}
