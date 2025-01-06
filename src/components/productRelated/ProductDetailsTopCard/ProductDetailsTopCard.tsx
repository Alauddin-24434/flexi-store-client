import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import { addToCart } from "../../../redux/features/cart/cartSlice";
import { useRouter } from "next/router";


interface ProductDetailsTopCardProps {
  productDetails: IProductItem; // Update to IProductItem
}

const ProductDetailsTopCard = ({ productDetails }: ProductDetailsTopCardProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const cartItems = useCurrentCart(); // Access the cart items using the custom hook
  const user = useAuthenticateUser(); // Get authenticated user data
  const [currentImage, setCurrentImage] = useState(productDetails?.thumbnailImage || '');
  const [quantity, setQuantity] = useState(1); // Quantity state

  useEffect(() => {
    if (productDetails?.thumbnailImage) {
      setCurrentImage(productDetails.thumbnailImage);
    }
  }, [productDetails]);

  const handleImageClick = (image: string) => {
    setCurrentImage(image);
  };

  const handleAddToCart = () => {
    const product = {
      _id: productDetails._id,
      userId: user?._id, // replace with actual user ID
      name: productDetails.name,
      category: productDetails.category,
      price: productDetails.price,
      thumbnailImage: productDetails.thumbnailImage,
      quantity, // current quantity
      isAvailable: productDetails.isAvailable,
    };
    // Dispatch addToCart action with all necessary fields
    dispatch(addToCart(product));
  };

  const handleBuyNow = () => {
    handleAddToCart(); // Add item to cart before navigating
    router.push("/product-shop"); // Assuming you have a checkout route
  };

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 p-6 rounded-lg">
      <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
        <div className="px-4 py-10 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
          <img
            src={currentImage}
            alt="Product"
            className="w-3/4 rounded object-cover mx-auto"
          />
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
          {productDetails?.additionalImages?.map((addiImg, index: number) => (
            <div
              key={index}
              className="w-24 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer"
              onClick={() => handleImageClick(addiImg)}
            >
              <img src={addiImg} alt={`Product ${index + 2}`} className="w-full" />
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-2">
        <h2 className="text-2xl font-extrabold text-gray-800">{productDetails?.name}</h2>

        <div className="md:flex space-x-2 mt-4 block">
          <svg className="w-5 fill-[#F2C94C]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <h4 className="text-gray-800 text-base">500 Reviews</h4>
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <p className="text-gray-800 text-3xl font-bold">${productDetails?.price}</p>
        </div>

        <div className="mt-32">
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-800">Quantity: {quantity}</h3>
            <div className="flex flex-wrap gap-3 mt-4">
              <button onClick={decrementQuantity} className="hover:bg-[#EB0029] bg-slate-300 w-20 p-1 rounded-md">-</button>
              <button onClick={incrementQuantity} className="hover:bg-[#EB0029] bg-slate-300 w-20 p-1 rounded-md">+</button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <button onClick={handleBuyNow} type="button" className="button-primary">
              Buy now
            </button>
            <button onClick={handleAddToCart} type="button" className="min-w-[200px] px-4 py-2.5 border border-secondary bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsTopCard;
