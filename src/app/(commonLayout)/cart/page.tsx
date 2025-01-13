"use client";
import { useCurrentUser } from '@/redux/features/auth/authSlice';
import { removeFromCart, updateQuantity, useCurrentCartItems } from '@/redux/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
;

const Cart = () => {

    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(useCurrentCartItems);
    const user= useSelector(useCurrentUser)
    const currentUserCartItems= cartItems.filter((cart)=> cart?.userId === user?.id);



    console.log(currentUserCartItems)
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    const handleCartRemove = (productId: string,) => {
        dispatch(removeFromCart(productId));
    };


    const handleIncreaseQuantity = (productId: string, productIdQuantity: number) => {


        dispatch(updateQuantity({ id: productId, quantity: productIdQuantity + 1 }))

    }
    const handleDecreaseQuantity = (productId: string, productIdQuantity: number) => {


        dispatch(updateQuantity({ id: productId, quantity: productIdQuantity - 1 }))

    }


    return (

        <div className="container mx-auto py-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Section */}
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Shopping Cart</h2>
            <hr className="border-gray-300 mb-8" />
      
            <div className="space-y-6">
              {currentUserCartItems?.map((item) => (
                <div
                  key={item?.id}
                  className="flex items-center gap-6 p-4 bg-gray-50 rounded-lg shadow-sm"
                >
                  {/* Image Section */}
                  <div className="w-24 h-24 bg-white p-2 rounded-lg">
                    <Image
                      src={item?.image}
                      alt="product"
                      className="w-full h-full object-contain"
                      width={100}
                      height={100}
                    />
                  </div>
      
                  {/* Item Details */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item?.name}
                    </h3>
                    <div className="flex items-center mt-2 gap-2 text-gray-600 text-sm">
                      <span>Price:</span>
                      <span className="font-bold text-gray-800">
                        ${Number(item?.price).toFixed(2)}
                      </span>
                    </div>
      
                    <div className="flex items-center mt-4 gap-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                          onClick={() =>
                            handleDecreaseQuantity(item?.id, item?.quantity)
                          }
                          className="px-2 py-1 text-gray-600 hover:text-gray-800"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            viewBox="0 0 124 124"
                          >
                            <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"></path>
                          </svg>
                        </button>
                        <span className="px-4">{item?.quantity}</span>
                        <button
                          onClick={() =>
                            handleIncreaseQuantity(item?.id, item?.quantity)
                          }
                          className="px-2 py-1 text-gray-600 hover:text-gray-800"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            viewBox="0 0 42 42"
                          >
                            <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"></path>
                          </svg>
                        </button>
                      </div>
      
                      {/* Remove Icon */}
                      <button
                        onClick={() => handleCartRemove(item?.id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 3a3 3 0 00-3 3v1H4.5A1.5 1.5 0 003 8.5v.5a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-.5A1.5 1.5 0 0019.5 7H18V6a3 3 0 00-3-3H9zM5 10v8a3 3 0 003 3h8a3 3 0 003-3v-8H5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
      
                  {/* Total Price */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">
                      ${(Number(item?.price) * item?.quantity).toFixed(2)}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
      
          {/* Summary Section */}
          <div className="bg-white p-6 rounded-lg shadow-md md:sticky top-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Order Summary</h3>
            <ul className="text-gray-600 space-y-4">
              <li className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-bold">
                  $
                  {cartItems
                    ?.reduce((total, item) => total + Number(item.price) * item.quantity, 0)
                    .toFixed(2)}
                </span>
              </li>
              <li className="flex justify-between">
                <span>Discount:</span>
                <span className="font-bold">$0.00</span>
              </li>
              <li className="flex justify-between">
                <span>Shipping:</span>
                <span className="font-bold">$2.00</span>
              </li>
              <li className="flex justify-between">
                <span>Tax:</span>
                <span className="font-bold">$4.00</span>
              </li>
              <li className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>
                  $
                  {(
                    cartItems?.reduce(
                      (total, item) => total + Number(item.price) * item.quantity,
                      0
                    ) + 2 + 4
                  ).toFixed(2)}
                </span>
              </li>
            </ul>
      
            <div className="mt-8 space-y-4">
              <button
                type="button"
                className="text-sm px-6 py-3 w-full font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              >
                Checkout
              </button>
              <button
                type="button"
                className="text-sm px-6 py-3 w-full font-semibold bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
      
    );
};

export default Cart;