import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface Review {
  id: number;
  text: string;
  rating: number;
  avatarUrl: string;
  name: string;
  profession: string;
}

const Testimonials: React.FC = () => {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null); // state to store selected review
  const reviewsData: Review[] = [
    {
      id: 1,
      text: 'Pagedone is simply the best tool of investment in the market right now.',
      rating: 5,
      avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
      name: 'John Doe',
      profession: 'Investor',
    },
    {
      id: 2,
      text: 'The user interface is incredibly easy to use and intuitive. Highly recommend!',
      rating: 4,
      avatarUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
      name: 'Jane Smith',
      profession: 'Trader',
    },
    {
      id: 3,
      text: 'Great service with a wide range of useful features. Customer support is top-notch.',
      rating: 5,
      avatarUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      name: 'Bob Johnson',
      profession: 'Financial Advisor',
    },
    {
      id: 4,
      text: 'Slight learning curve, but once you\'re familiar with it, it\'s very powerful. Slight learning curve, but once you\'re familiar with it, it\'s very powerful.',
      rating: 4,
      avatarUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
      name: 'Emily Davis',
      profession: 'Investor',
    },
    {
      id: 5,
      text: 'An excellent investment tool, very pleased with the results so far.',
      rating: 5,
      avatarUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
      name: 'Michael Brown',
      profession: 'Trader',
    }
  ];

  // Function to render the rating stars
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${i <= rating ? 'text-amber-500' : 'text-gray-300'}`}
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
            fill="currentColor"
          />
        </svg>
      );
    }
    return stars;
  };

  const handleReadMore = (review: Review) => {
    setSelectedReview(review);
  };

  const closeModal = () => {
    setSelectedReview(null);
  };

  return (
    <div>
      <section className="py-24">
        <div className="container mx-auto ">
          <div className="mb-14 flex flex-col justify-center items-center sm:flex-row sm:items-center sm:justify-between max-sm:gap-8">
            <h2 className="text-4xl text-center font-bold text-gray-900 lg:text-left">Testimonials</h2>
            <span className='flex gap-2'>
              <button
                className='rounded-md p-2 border border-[#008ECC]  px-4 hover:bg-[#008ECC] hover:text-white'
              >
                <Link href={'/reviews'}>
                  View All
                </Link>
              </button>
            </span>
          </div>

          <div className="swiper-wrapper lg:flex grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 swiper mySwiper">
            {reviewsData?.map((rev) => (
              <div
                key={rev.id}
                className="swiper-slide group bg-white border border-solid h-auto border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide-active:border-indigo-600"
              >
                <div className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500 group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                  {renderStars(rev.rating)} {/* Dynamically rendered stars */}
                </div>
                <p className="text-base text-gray-900">
                  {rev.text.length > 30 ? rev.text.slice(0, 50) + '...' : rev.text} {rev.text.length > 30 && (
                    <button
                      className="text-blue-500 mt-2"
                      onClick={() => handleReadMore(rev)}
                    >
                      more
                    </button>
                  )}
                </p>

                <div className="mt-6 flex items-center">
                  <Image width={100} height={100}
                    className="h-12 w-12 rounded-full"
                    src={rev.avatarUrl}
                    alt={rev.name}
                  />
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-gray-900">{rev.name}</p>
                    <p className="text-sm text-gray-500">{rev.profession}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for full review */}
      {selectedReview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-xl font-bold">{selectedReview.name}</h3>
            <p className="mt-4">{selectedReview.text}</p>
            <div className="mt-4">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
