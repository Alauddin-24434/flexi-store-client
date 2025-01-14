"use client";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import {
  removeFromCart,
  updateQuantity,
  useCurrentCartItems,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(useCurrentCartItems);
  const user = useSelector(useCurrentUser);
  const [phone, setPhone] = useState<string>("+880");
  const [address, setAddress] = useState<string>("");
  const [errors, setErrors] = useState<{ phone: boolean; address: boolean }>({
    phone: false,
    address: false,
  });

  const currentUserCartItems = cartItems.filter(
    (cart) => cart?.userId === user?.id
  );

  const [isMounted, setIsMounted] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("Online Payment");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const subtotal = currentUserCartItems.reduce(
    (acc, item) => acc + item.quantity * Number(item.price),
    0
  );
  const shipping = 8.0;
  const total = subtotal - discount + shipping;

  const handleApplyCoupon = () => {
    if (couponCode === "DISCOUNT10") {
      setDiscount(subtotal * 0.1); // 10% discount
    } else {
      setDiscount(0);
      alert("Invalid Coupon Code");
    }
  };

  const handleCartRemove = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncreaseQuantity = (productId: string, productIdQuantity: number) => {
    dispatch(updateQuantity({ id: productId, quantity: productIdQuantity + 1 }));
  };

  const handleDecreaseQuantity = (productId: string, productIdQuantity: number) => {
    if (productIdQuantity > 1) {
      dispatch(updateQuantity({ id: productId, quantity: productIdQuantity - 1 }));
    }
  };

  const handlePayment = () => {
    const validationErrors = {
      phone: !phone || phone === "+880",
      address: !address,
    };

    setErrors(validationErrors);

    if (!validationErrors.phone && !validationErrors.address) {
      alert("Proceeding to payment...");
      // Add your payment logic here
    }
  };

  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2">
        {/* Order Summary */}
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Shopping Cart</h2>
            <hr className="border-gray-300 mb-8" />
            <div className="space-y-6">
              {currentUserCartItems?.map((item) => (
                <div
                  key={item?.id}
                  className="flex items-center gap-6 p-4 bg-gray-50 rounded-lg shadow-sm"
                >
                  <div className="w-24 h-24 bg-white p-2 rounded-lg">
                    <Image
                      src={item?.image}
                      alt="product"
                      className="w-full h-full object-contain"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">{item?.name}</h3>
                    <div className="flex items-center mt-2 gap-2 text-gray-600 text-sm">
                      <span>Price:</span>
                      <span className="font-bold text-gray-800">
                        ${Number(item?.price).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-center mt-4 gap-4">
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                          onClick={() => handleDecreaseQuantity(item?.id, item?.quantity)}
                          className="px-2 py-1 text-gray-600 hover:text-gray-800"
                        >
                          -
                        </button>
                        <span className="px-4">{item?.quantity}</span>
                        <button
                          onClick={() => handleIncreaseQuantity(item?.id, item?.quantity)}
                          className="px-2 py-1 text-gray-600 hover:text-gray-800"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => handleCartRemove(item?.id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">
                      ${(Number(item?.price) * item?.quantity).toFixed(2)}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Details */}
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">Complete your order by providing your payment details.</p>
          <div>
            <label htmlFor="name" className="mt-4 mb-2 block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              defaultValue={user?.name}
              readOnly
              className="w-full rounded-md border px-4 py-3 text-sm"
            />
            <label htmlFor="phone" className="mt-4 mb-2 block text-sm font-medium">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`w-full rounded-md border px-4 py-3 text-sm ${
                errors.phone ? "border-red-500" : ""
              }`}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="text-sm text-red-500">Phone number is required.</p>
            )}
            <label htmlFor="billing-address" className="mt-4 mb-2 block text-sm font-medium">
              Billing Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="billing-address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={`w-full rounded-md border px-4 py-3 text-sm ${
                errors.address ? "border-red-500" : ""
              }`}
              placeholder="Enter your billing address"
            />
            {errors.address && (
              <p className="text-sm text-red-500">Billing address is required.</p>
            )}
            <div className="mt-6 border-t border-b py-2">
          
              <div className="mb-6">
                <p className="text-lg font-medium">Coupon Code</p>
                <div className="flex items-center mt-4">
                  <input
                    type="text"
                    className="flex-1 rounded-md border px-4 py-2 text-sm"
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <button
                    onClick={handleApplyCoupon}
                    className="ml-2 rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white"
                  >
                    Apply
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                <p className="font-semibold text-gray-900">${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Shipping</p>
                <p className="font-semibold text-gray-900">${shipping.toFixed(2)}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Discount</p>
                <p className="font-semibold text-gray-900">-${discount.toFixed(2)}</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">${total.toFixed(2)}</p>
            </div>
          </div>
          <label className="mt-4 mb-2 block text-sm font-medium">Payment Method</label>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="online"
                name="paymentMethod"
                value="Online Payment"
                checked={paymentMethod === "Online Payment"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="h-4 w-4"
              />
              <label htmlFor="online" className="text-sm font-medium">
                Online Payment
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="cod"
                name="paymentMethod"
                value="Cash on Delivery"
                checked={paymentMethod === "Cash on Delivery"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="h-4 w-4"
              />
              <label htmlFor="cod" className="text-sm font-medium">
                Cash on Delivery
              </label>
            </div>
          </div>
          <button onClick={handlePayment} className="mt-6 w-full rounded-md bg-green-500 px-6 py-3 font-medium text-white">
            Proceed to Payment
          </button>
    
      
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
