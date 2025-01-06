/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useFindProductByIdQuery } from "@/redux/features/products/productsApi";
import Link from "next/link";
import { useState, use } from "react";

interface IProps {
  params: Promise<{
    id: number;
  }>;
}

const ProductDetails = ({ params }: IProps) => {
  const resolvedParams = use(params);
  const id = Number(resolvedParams.id);

  const [quantity, setQuantity] = useState<number>(1);

  const { data: productData, isLoading: productLoading } = useFindProductByIdQuery(id);


  // Temporary mock data for related products
  const relatedProducts = [
    {
      id: 1,
      name: "Eco-Friendly Car Shampoo",
      mainImage: "https://via.placeholder.com/200",
      price: "15.99",
    },
    {
      id: 2,
      name: "Deluxe Car Wax",
      mainImage: "https://via.placeholder.com/200",
      price: "25.99",
    },
    {
      id: 3,
      name: "Microfiber Towel Set",
      mainImage: "https://via.placeholder.com/200",
      price: "12.49",
    },
    {
      id: 4,
      name: "High-Pressure Washer",
      mainImage: "https://via.placeholder.com/200",
      price: "89.99",
    },
  ];

  const handleAddToCart = () => {
    if (productData?.data?.name) {
      alert(`Added ${quantity} of ${productData.data.name} to the cart.`);
    }
  };

  if (productLoading) {
    return <div className="text-center text-xl py-10">Loading...</div>;
  }

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Product Images */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={productData?.data?.mainImage || "https://via.placeholder.com/500"}
              alt={productData?.data?.name || "Product"}
              className="w-full h-auto rounded-lg shadow-md mb-4"
              id="mainImage"
            />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {productData?.data?.thumbnails?.map((thumb: string, index: number) => (
                <img
                  key={index}
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-16 sm:w-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2">{productData?.data?.name || "Product Name"}</h2>
            <p className="text-gray-600 mb-2">Category: {productData?.data?.category || "N/A"}</p>
            <p className="text-gray-600 mb-4">
              Shop:{" "}
              <Link
                href={`/shop/${productData?.data?.shopId}`}
                className="text-blue-600 hover:underline"
              >
                {productData?.data?.shop?.name || "Shop Name"}
              </Link>
            </p>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">${productData?.data?.price || "0.00"}</span>
              {productData?.data?.originalPrice && (
                <span className="text-gray-500 line-through">${productData?.data?.originalPrice}</span>
              )}
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <button
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity <= 1}
                className="w-10 h-10 bg-gray-200 text-gray-700 flex items-center justify-center rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                -
              </button>
              <span className="text-xl font-bold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 bg-gray-200 text-gray-700 flex items-center justify-center rounded-md hover:bg-gray-300"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="w-full py-3 bg-green-500 text-white text-lg rounded-lg hover:bg-green-600 transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Related Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product: any) => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={product.mainImage || "https://via.placeholder.com/200"}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h4 className="text-lg font-bold">{product.name}</h4>
                <p className="text-gray-600">${product.price}</p>
                <Link
                  href={`/product/${product.id}`}
                  className="text-blue-600 hover:underline mt-2 block"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
