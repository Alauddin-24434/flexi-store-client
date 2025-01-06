"use client";

import ScrollToTop from "@/components/HomeRelated/ScrollToTop";
import HeroSection from "@/components/Shared/HeroSection/HeroSection";
import Categories from "@/components/UI/Categiries/Categories";
import Products from "@/components/UI/Products/Products";
import FlashSale from "@/components/UI/FlashSale/FlashSale";
import Footer from "@/components/Shared/Footer/Footer";
import SpecialOffer from "@/components/UI/SpecialOffer/SpecialOffer";
import BlogTips from "@/components/UI/BlogTips/BlogTips";
import Testimonials from "@/components/UI/Testimonials/Testimonials";

const HomePage = () => {
  return (
    <div className=" min-h-screen">
 
      {/* Hero Section */}
      <HeroSection />

      {/* Special Offer Section */}
      <SpecialOffer
        title="Winter Discount"
        description="20% off on selected products"
        discountPercentage={20}
        startDate="2025-01-10"
        endDate="2025-01-30"
        applicableProducts={["64a1f2b2c3d4e5f6g7h8i9j1", "64b2f3b2c4d5e6g7h8i9j2"]}
      />

      {/* Categories Section */}
      <Categories />

      {/* Flash Sale Section */}
      <FlashSale />
      {/* Blog or Tips Section */}
      <BlogTips />

      {/* Product Grid */}
      <Products />

      {/* Scroll to Top */}
      <ScrollToTop />
      <Testimonials />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
