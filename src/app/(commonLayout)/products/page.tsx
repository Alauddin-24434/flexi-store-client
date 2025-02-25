"use client";
import React, { useState, useEffect, useRef } from "react";
import { useFindAllProductQuery } from "@/redux/features/products/productsApi";
import ProductCard from "@/components/Shared/ProductCard/ProductCard";
import { TAddProduct } from "@/types";
import SkeletonCard from "@/components/Shared/Skelton/Skelton";
import { useSearchParams } from "next/navigation";

const ProductsPage: React.FC = () => {
  const searchParams = useSearchParams();
  const [category, setCategory] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [sorting, setSorting] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [products, setProducts] = useState<TAddProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const itemsPerPage = 9;

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category") || "";
    setCategory(categoryFromUrl);
  }, [searchParams]);

  useEffect(() => {
    setPage(1);
    setProducts([]);
    setHasMore(true);
  }, [category, search, sorting]);

  const { data, isLoading, error } = useFindAllProductQuery({
    page,
    limit: itemsPerPage,
    filter: "",
    category,
    sorting,
    search,
  });

  console.log(data)

  useEffect(() => {
    if (data?.data?.products?.length) {
      setProducts((prev) => [...prev, ...data?.data?.products]);
    }
    if (data?.data?.products?.length < itemsPerPage) {
      setHasMore(false);
    }
    setLoading(false);
  }, [data]);

  // Intersection Observer to load more products
  useEffect(() => {
    if (!hasMore || loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoading(true);
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [hasMore, loading]);

  if (error) return <p className="text-center text-red-500">Something went wrong. Please try again later.</p>;

  return (
    <div className="bg-[#e0f1f2] min-h-screen">
      <div className="max-w-7xl mx-auto p-4">
        
        {/* Sidebar Filters */}
        <div className="flex flex-col md:flex-row lg:flex-row gap-4">
          
          <div className="w-full md:w-1/4 lg:w-1/4 p-4 border rounded-lg shadow-md bg-white">
            
            {/* Category Filter */}
            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium">
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 w-full p-2 border rounded-md shadow-sm"
              >
                <option value="">All Categories</option>
              </select>
            </div>

            {/* Search Input */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-2 border rounded-md shadow-sm"
              />
            </div>

            {/* Sorting Options */}
            <div>
              <label htmlFor="sorting" className="block text-sm font-medium">
                Sort By
              </label>
              <select
                id="sorting"
                value={sorting}
                onChange={(e) => setSorting(e.target.value)}
                className="mt-1 w-full p-2 border rounded-md shadow-sm"
              >
                <option value="">Select Sorting</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Product List */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {products.map((product: TAddProduct) => (
                <ProductCard key={product.id} product={product} />
              ))}

              {loading &&
                Array.from({ length: 9 }).map((_, idx) => <SkeletonCard key={idx} />)}
            </div>

            {/* Infinite Scroll Trigger */}
            {hasMore && <div ref={observerRef} className="h-10 w-full"></div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
