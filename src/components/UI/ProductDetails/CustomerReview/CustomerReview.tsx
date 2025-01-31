import React, { useState } from "react";

import { TAddProduct } from "@/types";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks/hooks";


interface ProductDetailsReviewSectionProps {
 
    productDetails: TAddProduct;
}

const CustomerReview: React.FC<ProductDetailsReviewSectionProps> = ({ productDetails }) => {
    // const [addFoodReview] = useAddFoodReviewMutation();
    const user = useAppSelector(useCurrentUser)
    console.log(user)

    const [formData, setFormData] = useState({
        userId: user?.id,
        username: user?.name,
        productId:productDetails.id,
        rating: 0,
        profileImage: user?.profileImage,
        comment: "",
        date: new Date(),
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleRating = (rating: number) => {
        setFormData((prev) => ({
            ...prev,
            rating,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitted Review:", formData);

        try {
            const response = await addFoodReview({
                productId,
                body: formData,
            }).unwrap();

            console.log("Update Response:", response);
        } catch (error) {
            console.error("Error submitting review:", error);
        }
    };

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-800 my-6">Customer ratings & feedback</h2>
            <div className="p-6 bg-white rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex-1">
                    <form onSubmit={handleSubmit}>
                        {/* Rating */}
                        <div className="mb-4">
                            <label className="block text-gray-600 mb-2 font-medium">Rating</label>
                            <div className="flex items-center gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        type="button"
                                        key={star}
                                        className={`text-2xl ${formData.rating >= star ? "text-yellow-500" : "text-gray-300"}`}
                                        onClick={() => handleRating(star)}
                                    >
                                        ★
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Comment */}
                        <div className="mb-4">
                            <label htmlFor="comment" className="block text-gray-600 mb-2 font-medium">
                                Your Feedback
                            </label>
                            <textarea
                                id="comment"
                                name="comment"
                                value={formData.comment}
                                onChange={handleChange}
                                placeholder="Enter your feedback"
                                rows={4}
                                className="w-full p-3 border rounded-lg focus:ring focus:ring-green-300"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg text-lg font-medium"
                        >
                            Submit Review
                        </button>
                    </form>
                </div>
            </div>

            <div className="flex flex-col gap-y-4 mt-6">
                <h2 className="text-2xl font-bold">Customer Feedback</h2>

                {/* {foodDetails?.reviews?.map((rev, index) => (
                    <div key={index} className="pt-8 max-xl:max-w-2xl max-xl:mx-auto p-4 rounded-md border">
                        <div className="mt-2 flex items-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                    key={star}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 30 30"
                                    fill={rev?.rating >= star ? "#FBBF24" : "#D1D5DB"}
                                >
                                    <path
                                        d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                    />
                                </svg>
                            ))}
                        </div>

                        <div className="flex sm:items-center flex-col min-[400px]:flex-row justify-between gap-5 mb-4">
                            <div className="flex items-center gap-3">
                                <img src={rev?.profileImage} alt="Robert image" className="w-8 h-8 rounded-full object-cover" />
                                <h6 className="font-semibold text-lg leading-8 text-indigo-600">{rev?.username}</h6>
                            </div>
                            <p className="font-normal text-lg leading-8 text-gray-400">
                                {rev?.date ? new Date(rev.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Date not available'}
                            </p>
                        </div>
                        <p className="font-normal text-lg leading-8 text-gray-400 max-xl:text-justify">{rev?.comment}</p>
                    </div>
                ))} */}
            </div>
        </div>
    );
};

export default CustomerReview;