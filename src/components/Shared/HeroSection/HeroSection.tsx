import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
    return (
        <div>
            <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-[60%]">

                <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
                    <div className="container mx-auto  flex relative py-16">
                        <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                            </span>
                            <h1
                                className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                                Be on
                                <span className="text-5xl sm:text-7xl">
                                    Time
                                </span>
                            </h1>
                            <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                                Dimension of reality that makes change possible and understandable. An indefinite and homogeneous
                                environment in which natural events and human existence take place.
                            </p>
                            <div className="flex mt-8">
                                <a href="#"
                                    className="uppercase py-2 px-4 rounded-lg bg-[#008ECC] border-2 border-transparent text-white text-md mr-4 hover:bg-[#008ECC]">
                                    Get started
                                </a>
                                <a href="#"
                                    className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-[#008ECC] hover:bg-[#008ECC] hover:text-white dark:text-white hover:bg-pink-500 hover:text-white text-md">
                                    Read more
                                </a>
                            </div>
                        </div>
                        <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                            <Image width={100} height={100} src="https://www.tailwind-kit.com/images/object/10.png" alt='' className="max-w-xs md:max-w-sm m-auto" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HeroSection;