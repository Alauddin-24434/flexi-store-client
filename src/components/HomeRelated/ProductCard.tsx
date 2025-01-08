// components/ProductCard.tsx
import Image from "next/image";
import React from "react";

const ProductCard = ({ product }: { product: { name: string; price: number; image: string } }) => {
  return (
    <div className="product-card">
     <Image width={100} height={100} src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductCard;
