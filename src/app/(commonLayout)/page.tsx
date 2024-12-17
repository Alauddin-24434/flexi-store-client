/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Categories from "@/components/HomeRelated/Categories";
import Filters from "@/components/HomeRelated/Filters";
import FlashSale from "@/components/HomeRelated/FlashSale";
import ProductCard from "@/components/HomeRelated/ProductCard";
import ScrollToTop from "@/components/HomeRelated/ScrollToTop";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/product");
      setProducts(data.products);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-green-400 to-green-500 text-white py-8 text-center shadow-md">
        <h1 className="text-4xl font-bold mb-2">Welcome to Our Store</h1>
        <p className="text-lg">Discover amazing products at unbeatable prices!</p>
      </header>

      {/* Categories */}
      <section className="py-8">
        <Categories />
      </section>

      {/* Filters */}
      <section className="bg-white shadow-sm p-4 mb-8 rounded-lg mx-auto w-11/12 lg:w-10/12">
        <Filters />
      </section>

      {/* Flash Sale */}
      <section className="py-8 bg-yellow-50">
        <FlashSale />
      </section>

      {/* Product Grid */}
      <section className="py-8">
        <div className="mx-auto w-11/12 lg:w-10/12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Our Products</h2>

          {loading ? (
            <p className="text-center text-gray-500 text-xl animate-pulse">Loading...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product):any => (
                <ProductCard key={product} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Scroll to Top */}
      <ScrollToTop />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-8 text-center">
        <p>&copy; 2024 Your Store. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
