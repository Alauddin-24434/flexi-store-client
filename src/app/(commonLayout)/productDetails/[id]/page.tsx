"use client";

import CustomerReview from "@/components/UI/ProductDetails/CustomerReview/CustomerReview";
import RelatedProducts from "@/components/UI/ProductDetails/RelatedProduct/RelatedProducts";
import Image from "next/image";
import React, { useState } from "react";

const ProductDetails = () => {
  // Mock data for dynamic sizes
  const sizes = ["XS", "S", "M", "L", "XL"]; // Replace this with actual data or props
  const [selectedSize, setSelectedSize] = useState<string | null>(null); // Track selected size
  const [quantity, setQuantity] = useState<number>(1); // Track quantity, default is 2
  const [selectedImage, setSelectedImage] = useState<string>( // Track the selected thumbnail image
    "https://www.mobiledokan.com/media/oppo-f25-pro-lava-red-official-image.webp"
  );

  // Handle increment of quantity
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Handle decrement of quantity
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  // Handle image selection when thumbnail is clicked
  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className="container mx-auto mt-8">
      {/* Main container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Section - Images */}
        <div className="lg:col-span-6">
          <div className="flex gap-x-4">
            {/* Additional images */}
            <div className="flex flex-col gap-4 w-[170px] p-1 rounded-md ">
              <Image
              width={100}
              height={100}
                src="https://www.mobiledokan.com/media/oppo-f25-pro-lava-red-official-image.webp"
                alt="Additional Image 1"
                className="w-[170px] h-[138px] border rounded-md cursor-pointer hover:border-indigo-500"
                onClick={() =>
                  handleImageClick(
                    "https://www.mobiledokan.com/media/oppo-f25-pro-lava-red-official-image.webp"
                  )
                }
              />
              <Image
              width={100}
              height={100}
                src="https://www.mobiledokan.com/media/oppo-f25-pro-lava-red-official-image.webp"
                alt="Additional Image 2"
                className="w-[170px] h-[138px] border rounded-md cursor-pointer hover:border-indigo-500"
                onClick={() =>
                  handleImageClick(
                    "https://www.mobiledokan.com/media/oppo-f25-pro-lava-red-official-image.webp"
                  )
                }
              />
               <Image
              width={100}
              height={100}
                src="https://www.mobiledokan.com/media/oppo-f25-pro-lava-red-official-image.webp"
                alt="Additional Image 3"
                className="w-[170px] h-[138px] border rounded-md cursor-pointer hover:border-indigo-500"
                onClick={() =>
                  handleImageClick(
                    "https://www.mobiledokan.com/media/oppo-f25-pro-lava-red-official-image.webp"
                  )
                }
              />
               <Image
              width={100}
              height={100}
                src="https://www.mobiledokan.com/media/oppo-f25-pro-lava-red-official-image.webp"
                alt="Additional Image 4"
                className="w-[170px] h-[138px] border rounded-md cursor-pointer hover:border-indigo-500"
                onClick={() =>
                  handleImageClick(
                    "https://www.mobiledokan.com/media/oppo-f25-pro-lava-red-official-image.webp"
                  )
                }
              />
            </div>

            {/* Thumbnail image */}
            <div className="w-[500px] h-[600px] border  rounded-md">
            <Image
              width={100}
              height={100}
                src={selectedImage} // Dynamically change the selected image
                alt="Thumbnail Image"
                className="w-full h-full rounded-md"
              />
            </div>
          </div>
        </div>

{/* Right Section - Product Info */}
<div className="lg:col-span-6 p-6">
 
<div className="flex justify-between items-center">
<h2 className="text-2xl font-semibold text-gray-800">
    Havic HV G-92 Gamepad
  </h2>
   {/* Visit Shop Button */}
   <div className="">
    <button className="px-4 py-2 font-extrabold underline  hover:text-indigo-600">
      Visit Shop
    </button>
  </div>
</div>

  <span className="block mt-2 text-xl font-bold text-green-500">
    $192.00
  </span>
  <p className="mt-4 text-gray-600">
    PlayStation 5 Controller Skin. High-quality vinyl with air channel
    adhesive for easy bubble-free installation and mess-free removal.
    Pressure sensitive.
  </p>
  <hr className="my-6" />
 {/* Ratings and Reviews */}
 <div className="flex items-center gap-2 mb-6">
    <div className="flex items-center">
      {Array(3)
        .fill(0)
        .map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
          </svg>
        ))}
    </div>
    <p className="text-sm text-gray-600">(150 reviews)</p>
  </div>
  {/* Color and Size Options */}
  <div>
    <div className="flex gap-4 items-center">
      <p className="font-semibold text-gray-800">Colors:</p>
      <div className="flex gap-4">
        <span className="w-6 h-6 bg-red-500 rounded-full cursor-pointer border border-gray-300"></span>
        <span className="w-6 h-6 bg-green-500 rounded-full cursor-pointer border border-gray-300"></span>
        <span className="w-6 h-6 bg-blue-500 rounded-full cursor-pointer border border-gray-300"></span>
      </div>
    </div>

    <div className="mt-6 flex gap-4 items-center">
      <p className="font-semibold text-gray-800">Size:</p>
      <div className="flex gap-4">
        {sizes && sizes.length > 0 ? (
          sizes.map((size) => (
            <div
              key={size}
              onClick={() => setSelectedSize(size)} // Update selected size
              className={`flex items-center justify-center w-7 h-7 border rounded-md cursor-pointer ${
                selectedSize === size
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "border-gray-300 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {size}
            </div>
          ))
        ) : (
          <p className="text-gray-500">Size not available</p>
        )}
      </div>
    </div>
  </div>

  {/* Quantity Control and Buttons */}
  <div className="flex gap-x-2 items-center justify-between mt-6">
    <div className="border rounded-md">
      <button
        onClick={decrementQuantity}
        className="px-6 py-2 text-black border-r"
      >
        -
      </button>
      <span className="px-4 h-4">{quantity}</span>
      <button
        onClick={incrementQuantity}
        className="px-6 py-2 text-black border-l"
      >
        +
      </button>
    </div>

    <div className="flex gap-4">
      <button className="px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
        Add to Cart
      </button>
      <button className="px-6 py-2 text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white">
        Buy Now
      </button>
    </div>
  </div>

  {/* Featured Section */}
  <div className="mt-12 py-8 px-4 border">
    <h3 className="text-2xl font-semibold text-gray-800 mb-6">
      Delivery & Returns
    </h3>
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
      {/* Same Day Dispatch */}
      <div className="flex items-center mb-4 sm:mb-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-blue-500 mr-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7v10M8 7v10m-4 4h16"
          />
        </svg>
        <div>
          <h4 className="text-lg font-semibold text-gray-800">
            Same Day Dispatch
          </h4>
          <p className="text-sm text-gray-600">
            We process all orders placed before 2 PM on the same day.
          </p>
        </div>
      </div>

      {/* Return Delivery */}
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-red-500 mr-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 8l7 7 7-7M12 15V3"
          />
        </svg>
        <div>
          <h4 className="text-lg font-semibold text-gray-800">
            Return Delivery
          </h4>
          <p className="text-sm text-gray-600">
            Hassle-free returns within 30 days for a full refund.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


       
      </div>

      {/* Related Items */}
    <RelatedProducts/>

    {/* customer reveiwes  */}
    <CustomerReview/>
    </div>
  );
};

export default ProductDetails;
