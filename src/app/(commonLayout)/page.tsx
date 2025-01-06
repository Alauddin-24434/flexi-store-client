"use client";

import ScrollToTop from "@/components/HomeRelated/ScrollToTop";
import HeroSection from "@/components/Shared/HeroSection/HeroSection";
import Categories from "@/components/UI/Home/Categiries/Categories";
import Products from "@/components/UI/Home/Products/Products";
import FlashSale from "@/components/UI/Home/FlashSale/FlashSale";
import Footer from "@/components/Shared/Footer/Footer";
import BlogTips from "@/components/UI/Home/BlogTips/BlogTips";
import Testimonials from "@/components/UI/Home/Testimonials/Testimonials";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Flash Sale Section */}
      <FlashSale />

      {/* Categories Section */}
      <Categories />

      {/* Product Grid Section */}
      <Products />

      {/* Blog or Tips Section */}
      <BlogTips />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Scroll to Top */}
      <ScrollToTop />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
