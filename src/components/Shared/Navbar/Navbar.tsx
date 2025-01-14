"use client";
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <section>
      {/* Top Bar */}
      <div className="bg-[#0b7670] py-2">
        <div className="flex lg:max-w-7xl max-w-xl mx-auto justify-between items-center px-4">
          {/* Logo */}
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#FFFFFF]"
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
            <span className="ml-2 font-semibold text-[#FFFFFF]">MegaMart</span>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex ml-6 flex-1 gap-x-3">
            <input
              type="text"
              className="w-full rounded-md border border-[#008ECC] px-3 py-2 text-sm"
              placeholder="Search"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center">
            <div className="hidden lg:flex">
              <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#FFFFFF]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                  <path
                    fillRule="evenodd"
                    d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium text-[#FFFFFF]">Orders</span>
              </div>

              <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#FFFFFF]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium text-[#FFFFFF]">Favorites</span>
              </div>

              <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#FFFFFF]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    3
                  </span>
                </div>
                <span className="text-sm font-medium text-[#FFFFFF]">Cart</span>
              </div>

              <div className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border border-[#008ECC] py-2 px-4 hover:bg-[#008ECC] hover:text-white">
                <span className="text-sm font-medium">
                  <Link href={'/login'}>Login</Link>
                </span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex items-center text-white ml-4"
              onClick={toggleMobileMenu}
            >
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={`relative ${isMobileMenuOpen ? "block" : "hidden lg:flex"} w-full flex-wrap bg-[#0d938e] py-4 text-white`}>
        <div className="lg:max-w-7xl max-w-xl mx-auto flex flex-col lg:flex-row items-center px-4 gap-4">
          <div className="relative">
            <button
              className="flex items-center gap-2"
              onClick={toggleDropdown}
            >
              Categories
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <ul
              className={`absolute z-50 mt-2 min-w-max list-none rounded-lg bg-white shadow-lg text-black ${isDropdownOpen ? "block" : "hidden"}`}
            >
              <li>
                <a className="block px-4 py-2 text-sm hover:bg-gray-200" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="block px-4 py-2 text-sm hover:bg-gray-200" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="block px-4 py-2 text-sm hover:bg-gray-200" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/shop">Shop</Link>

          <Link href="/cart">Cart</Link>
          <Link href="/checkout">Checkout</Link>
        </div>
      
      </div>
    </nav>
      
    </section>

  );
};

export default Navbar;
