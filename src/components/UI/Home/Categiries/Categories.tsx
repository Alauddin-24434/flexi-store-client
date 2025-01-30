import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Categories = () => {
  const [categories, setCategories] = useState<{ category: string; thumbnailImage: string }[]>([]);

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

  console.log(categories)

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 6 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
  };

  return (
    <section className="py-12 bg-gradient-to-r from-[#b2dede] to-[#8ec5c5]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8 uppercase">Shop by Category</h2>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          arrows={true}
          swipeable={true}
          draggable={true}
        >
          {categories?.map((cat) => (
            <div key={cat?.category} className="flex flex-col items-center group">
              <Link href={`/products?category=${cat.category.toLowerCase()}`}>
                <div className="w-40 h-40 border rounded-lg bg-gray-50 cursor-pointer overflow-hidden shadow-md hover:shadow-xl transition-all">
                  <Image
                    width={160}
                    height={140}
                    src={cat?.thumbnailImage}
                    alt={cat?.category}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              </Link>
              <span className="text-center mt-3 font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                {cat?.category.toUpperCase()}
              </span>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Categories;
