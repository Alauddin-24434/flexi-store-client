import Image from "next/image";

const CheckoutPage = () => {
    return (
        <div className="container mx-auto">
          
            <div className="grid lg:grid-cols-2 ">
                <div className="px-4 pt-8">
                    <p className="text-xl font-medium">Order Summary</p>
                    <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
                    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                        {/* Order Items */}
                        <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                            <Image width={100} height={100} className="m-2 h-24 w-28  rounded-md border object-cover object-center" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                            <div className="flex w-full flex-col px-4 py-4">
                                <span className="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
                                <span className="float-right text-gray-400">42EU - 8.5US</span>
                                <p className="text-lg font-bold">$138.99</p>
                            </div>
                        </div>
                       
                    </div>


                </div>

                <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                    <p className="text-xl font-medium">Payment Details</p>
                    <p className="text-gray-400">Complete your order by providing your payment details.</p>
                    <div>
                        {/* Name, Email, and Address Inputs */}
                        <label htmlFor="name" className="mt-4 mb-2 block text-sm font-medium">Name</label>
                        <input type="text" id="name" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Your Name" />
                        <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">Email</label>
                        <input type="email" id="email" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="you@example.com" />
                        <label htmlFor="billing-address" className="mt-4 mb-2 block text-sm font-medium">Billing Address</label>
                        <input type="text" id="billing-address" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="123 Street Name" />

                        {/* Total Section */}
                        <div className="mt-6 border-t border-b py-2">
                            {/* Coupon Code Section */}
                            <div className="mb-6">
                                <p className="text-lg font-medium">Coupon Code</p>
                                <div className="flex items-center mt-4">
                                    <input type="text" className="flex-1 rounded-md border border-gray-200 px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Enter coupon code" />
                                    <button className="ml-2 rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">Apply</button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                                <p className="font-semibold text-gray-900">$399.00</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">Shipping</p>
                                <p className="font-semibold text-gray-900">$8.00</p>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">Total</p>
                            <p className="text-2xl font-semibold text-gray-900">$408.00</p>
                        </div>
                    </div>
                    {/* Payment Method Selection */}
                    <label className="mt-4 mb-2 block text-sm font-medium">Payment Method</label>
                    <div className="flex space-x-4">
                        <div className="flex items-center space-x-2">
                            <input type="radio" id="online" name="paymentMethod" value="Online Payment" className="h-4 w-4" />
                            <label htmlFor="online" className="text-sm font-medium">Online Payment</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="radio" id="cod" name="paymentMethod" value="Cash on Delivery" className="h-4 w-4" />
                            <label htmlFor="cod" className="text-sm font-medium">Cash on Delivery</label>
                        </div>
                    </div>
                    <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Confirm Order</button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
