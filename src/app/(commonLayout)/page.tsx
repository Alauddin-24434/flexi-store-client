"use client";


import HeroSection from "@/components/Shared/HeroSection/HeroSection";
import Categories from "@/components/UI/Home/Categiries/Categories";
import Products from "@/components/UI/Home/Products/Products";
import FlashSale from "@/components/UI/Home/FlashSale/FlashSale";
import Footer from "@/components/Shared/Footer/Footer";

import Testimonials from "@/components/UI/Home/Testimonials/Testimonials";
import RecommendeProducts from "@/components/UI/Home/Recommended/Recommended";

const HomePage = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <HeroSection />

      {/* Flash Sale Section */}
      <FlashSale />

      {/* Categories Section */}
      <Categories />

    
<RecommendeProducts/>
     
        {/* Product Grid Section */}
        <Products />
    

      {/* Testimonials Section */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
