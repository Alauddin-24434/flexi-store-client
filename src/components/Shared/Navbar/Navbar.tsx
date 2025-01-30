"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { BiSolidLogIn } from "react-icons/bi";

const Navbar=()=> {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [categories, setCategories] = useState<{ category: string }[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://flexi-store-backend.vercel.app/categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  console.log(categories)

  return (
    <section>
      {/* Top Bar */}
      <div className="bg-[#0b7670] py-2">
        <div className="flex max-w-7xl mx-auto justify-between items-center px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center text-white font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
            <span className="ml-2">MegaMart</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 ml-6">
            <input
              type="text"
              className="w-full rounded-md border border-[#008ECC] px-3 py-2 text-sm"
              placeholder="Search"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/orders" className="flex items-center gap-1 text-white hover:text-gray-300">
              <span>Orders</span>
            </Link>
            <Link href="/cart" className="flex items-center gap-1 text-white hover:text-gray-300">
              <span>Cart</span>
            </Link>
            <Link href="/login" className="flex items-center gap-1 text-white hover:text-gray-300">
              <BiSolidLogIn className="h-5 w-5" />
              <span>Login</span>
            </Link>
            {/* Mobile Menu Button */}
            <button className="lg:hidden text-white" onClick={toggleMobileMenu}>
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={`w-full bg-[#0d938e] py-4 text-white ${isMobileMenuOpen ? "block" : "hidden lg:block"}`}>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-4 gap-4">
          {/* Categories Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-2 cursor-pointer"
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
            >
              Categories
            </button>
            <ul
              className={`absolute z-50 top-full mt-2 left-0 bg-white text-black shadow-lg rounded-md overflow-hidden ${
                isDropdownOpen ? "block" : "hidden"
              }`}
            >
              {
                categories.map((cat, index) => (
                  <li key={index} className="px-4 py-2 border-b last:border-0 hover:bg-gray-100 ">
                  <Link href={{ pathname: "/products", query: { category: cat.category.toLowerCase() } }} onClick={() => setIsDropdownOpen(false)}>
                      <span className="block px-4 py-2 text-sm cursor-pointer">{cat?.category}</span>
                    </Link>
                  </li>
          
              ))}
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col lg:flex-row gap-4">
            <Link href="/" className="hover:text-gray-200" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/products" className="hover:text-gray-200" onClick={() => setIsMobileMenuOpen(false)}>
              Products
            </Link>
            <Link href="/cart" className="hover:text-gray-200" onClick={() => setIsMobileMenuOpen(false)}>
              Cart
            </Link>
            <Link href="/checkout" className="hover:text-gray-200" onClick={() => setIsMobileMenuOpen(false)}>
              Checkout
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;