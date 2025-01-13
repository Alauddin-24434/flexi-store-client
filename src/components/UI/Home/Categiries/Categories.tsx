import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Categories = () => {
    const categoryCard = [
        { _id: "1", name: "Phones", category: "phones", image: "https://via.placeholder.com/150x100?text=Phones" },
        { _id: "2", name: "Watches", category: "watches", image: "https://via.placeholder.com/150x100?text=Watches" },
        { _id: "3", name: "Laptops", category: "laptops", image: "https://via.placeholder.com/150x100?text=Laptops" },
        { _id: "4", name: "Tablets", category: "tablets", image: "https://via.placeholder.com/150x100?text=Tablets" },
        { _id: "5", name: "Cameras", category: "cameras", image: "https://via.placeholder.com/150x100?text=Cameras" },
        { _id: "6", name: "Headphones", category: "headphones", image: "https://via.placeholder.com/150x100?text=Headphones" },
        { _id: "7", name: "Dresses", category: "dresses", image: "https://via.placeholder.com/150x100?text=Dresses" },
        { _id: "8", name: "Shoes", category: "shoes", image: "https://via.placeholder.com/150x100?text=Shoes" },
        { _id: "9", name: "Bags", category: "bags", image: "https://via.placeholder.com/150x100?text=Bags" },
        { _id: "10", name: "Jewelry", category: "jewelry", image: "https://via.placeholder.com/150x100?text=Jewelry" },
        { _id: "11", name: "Beauty", category: "beauty", image: "https://via.placeholder.com/150x100?text=Beauty" },
        { _id: "12", name: "Sports", category: "sports", image: "https://via.placeholder.com/150x100?text=Sports" },
        { _id: "13", name: "Toys", category: "toys", image: "https://via.placeholder.com/150x100?text=Toys" },
        { _id: "14", name: "Furniture", category: "furniture", image: "https://via.placeholder.com/150x100?text=Furniture" },
        { _id: "15", name: "Appliances", category: "appliances", image: "https://via.placeholder.com/150x100?text=Appliances" },
        { _id: "16", name: "Books", category: "books", image: "https://via.placeholder.com/150x100?text=Books" },
    ];

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <section className="py-10 bg-[#b2dede]">
            <div className="lg:max-w-7xl max-w-xl mx-auto">
               

                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    arrows={true}
                    swipeable={true}
                    draggable={true}
                >
                    {categoryCard.map((cat) => (
                        <Link href={`/products?${cat.category}`} key={cat._id}>
                            <div className="flex flex-col items-center">
                                <div className="w-40 h-40  border rounded-md  bg-gray-50 cursor-pointer hover:shadow-lg">
                                    <Image
                                        width={150}
                                        height={100}
                                        src={cat.image}
                                        alt={cat.name}
                                        className="object-cover rounded-md "
                                    />

                                </div>
                                <span className="text-center mt-2 font-medium text-lg">{cat.name}</span>
                            </div>
                        </Link>
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

export default Categories;
