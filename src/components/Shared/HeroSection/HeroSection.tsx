import React, { useEffect, useState } from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  const slides = [
    {
      imgSrc: "https://i.ibb.co.com/MpsPFs5/Apple-i-Phone-12-PNG-Picture-removebg.png",
      imgAlt: "Vibrant abstract painting with swirling blue and light pink hues on a canvas.",
      title: "Discover the Best Deals",
      description: "Shop top-rated products at unbeatable prices. Your ultimate shopping experience starts here.",
    },
    {
      imgSrc: "https://i.ibb.co.com/z2LtVV6/7-72850-new-mobile-phone-png-transparent-png-removebg-preview.png",
      imgAlt: "Vibrant abstract painting with swirling red, yellow, and pink hues on a canvas.",
      title: "Exclusive Offers Just for You",
      description: "Get access to members-only discounts, flash sales, and special promotions.",
    },
    {
      imgSrc: "https://i.ibb.co.com/2d37kfH/og-bq4s0q4hhcuq-removebg-preview.png",
      imgAlt: "Vibrant abstract painting with swirling blue and purple hues on a canvas.",
      title: "Shop with Confidence",
      description: "Safe, secure, and easy checkout. Experience the best shopping platform for all your needs.",
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const autoplayIntervalTime = 4000;

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, autoplayIntervalTime);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  return (
    <div className="relative min-h-[50vh] md:min-h-[70vh] w-full overflow-hidden bg-[#b2dede]">
      {/* Slides */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full flex flex-wrap items-center justify-between transition-opacity duration-1000 ${
              index === currentSlideIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Slide Content */}
            <div className="w-full md:w-2/5 text-center md:text-left">
              <h1 className="font-bebas-neue uppercase text-xl md:text-3xl lg:text-5xl font-black text-gray-800 leading-tight">
                {slide.title}
              </h1>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700">
                {slide.description}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start mt-6 gap-4">
                <a
                  href="#"
                  className="uppercase py-2 px-3 sm:py-3 sm:px-5 rounded-md bg-[#0d938f] text-white text-sm sm:text-base hover:bg-[#0b7671]"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="uppercase py-2 px-3 sm:py-3 sm:px-5 rounded-md border border-[#0d938f] text-[#0d938f] text-sm sm:text-base hover:bg-[#0b7671] hover:text-white"
                >
                  Tips and Advice
                </a>
              </div>
            </div>
            {/* Slide Image */}
            <div className="w-full md:w-3/5 flex justify-center mt-6 md:mt-0">
              <div className="w-60 h-60 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] relative">
                <Image
                  src={slide.imgSrc}
                  alt={slide.imgAlt}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pause/Play Button */}
      <button
        type="button"
        className="absolute bottom-5 right-5 z-20 rounded-full bg-black/50 p-2 text-white opacity-80 hover:opacity-100"
        aria-label={isPaused ? "Play carousel" : "Pause carousel"}
        onClick={() => setIsPaused(!isPaused)}
      >
        {isPaused ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
            className="w-6 h-6"
          >
            <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0Zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
            className="w-6 h-6"
          >
            <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0ZM7 7.75A.75.75 0 017.75 7h.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75v-4.5Zm4 0a.75.75 0 01.75-.75h.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75v-4.5Z" />
          </svg>
        )}
      </button>

      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition ${
              currentSlideIndex === index ? "bg-[#0d938f]" : "bg-[#e0f1f2]"
            }`}
            onClick={() => setCurrentSlideIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
