"use client";
import { useFindSingleUserQuery } from "@/redux/features/auth/authApi";
import { useState, use } from "react";

interface IProps {
  params: Promise<{
    id: number; // Use string for dynamic route params
  }>;
}

const ProductDetails = ({ params }: IProps) => {
  const resolvedParams = use(params); // Unwrapping params
  const id = Number(resolvedParams.id);

  const [quantity, setQuantity] = useState<number>(1);

  // Fetch product data using Redux RTK Query
  const { data: productData, isLoading: productLoading } = useFindSingleUserQuery(id);
console.log(productData)
  const handleAddToCart = () => {
    if (productData?.data?.name) {
      alert(`Added ${quantity} of ${productData.data.name} to the cart.`);
    }
  };

  if (productLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div key={productData?.data?.id} className="product-details">
        <img
          src={productData?.data?.imageUrl || "/placeholder.jpg"}
          alt={productData?.data?.name || "Product"}
          className="product-image"
        />
        <div className="product-info">
          <h1>{productData?.data?.name}</h1>
          <p>{productData?.data?.description}</p>
          <p>
            <strong>${productData?.data?.price}</strong>
          </p>
          <div className="quantity">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min={1}
            />
          </div>
          <button onClick={handleAddToCart} className="add-to-cart-button">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
