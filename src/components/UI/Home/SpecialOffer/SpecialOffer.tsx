import React from "react";

interface SpecialOfferProps {
  title: string;
  description: string;
  discountPercentage: number;
  startDate: string;
  endDate: string;
  applicableProducts: string[];
}

const SpecialOffer: React.FC<SpecialOfferProps> = ({
  title,
  description,
  discountPercentage,
  startDate,
  endDate,
  applicableProducts,
}) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-400 text-white p-6 rounded-lg shadow-lg max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-sm mb-4">{description}</p>
      <div className="flex items-center justify-between mb-4">
        <span className="bg-yellow-500 text-black font-semibold py-1 px-3 rounded-lg">
          {discountPercentage}% OFF
        </span>
        <span className="text-sm">
          Valid: {new Date(startDate).toLocaleDateString()} -{" "}
          {new Date(endDate).toLocaleDateString()}
        </span>
      </div>
      <ul className="text-sm mb-4">
        <li className="font-semibold">Applicable Products:</li>
        {applicableProducts.map((productId, index) => (
          <li key={index}>Product ID: {productId}</li>
        ))}
      </ul>
      <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-lg shadow hover:bg-gray-200 transition-all">
        Shop Now
      </button>
    </div>
  );
};

export default SpecialOffer;
