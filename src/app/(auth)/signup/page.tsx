"use client";

import { useForm } from "react-hook-form";
import { JwtPayload, TUser } from "@/types"; // Your TypeScript interface for user data
import { zodResolver } from "@hookform/resolvers/zod";

import { useRegisterMutation } from "@/redux/features/auth/authApi"; // Your custom hook for registration API
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { setUser } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";

import Loading from "@/app/loading";
import { SignupValidationSchema } from "@/schemas/validationSchema";

// Role options for the select field
const roleOptions = [
    { key: "USER", label: "USER" },
    { key: "VENDOR", label: "VENDOR" },
    { key: "ADMIN", label: "ADMIN" },
];

const Signup = () => {
    const router = useRouter();
    const [registerUser, { isLoading, isError, error }] = useRegisterMutation(); // Using the hook to register the user
    const dispatch = useAppDispatch();
    // Use the Zod validation schema with the React Hook Form resolver
    const { register, handleSubmit, formState: { errors } } = useForm<TUser>({
        resolver: zodResolver(SignupValidationSchema), // Apply Zod validation here
        defaultValues: { name: "", email: "", password: "", role: "" },
    });

    // On Submit handler
    const onSubmit = async (data: TUser) => {
        try {
            // Dispatch the register mutation and await response
            const res = await registerUser(data).unwrap();
            if (res.error) {
                toast.error(res.error.data.message, { duration: 2000 });
            } else {
                toast.success(res.data.message, { duration: 2000 });
                const token = res.data?.accessToken;
                const decoded = await verifyToken(token);
                dispatch(
                    setUser({
                        token: res?.data?.accessToken,
                        user: decoded as JwtPayload,
                    })
                );
                router.push("/");
            }
            console.log("User Registered", data);
        } catch (err) {
            console.error("Registration failed:", err);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">

            {
                isLoading ? (<div>
                    <Loading />
                </div>) : (<div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-center text-2xl font-semibold text-green-600 mb-6">Signup</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* Name Field */}
                        <div>
                            <label className="block text-sm">Name</label>
                            <input
                                type="text"
                                {...register("name")}
                                className={`w-full p-2 border rounded ${errors.name ? "border-red-500" : "border-gray-300"}`}
                            />
                            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-sm">Email</label>
                            <input
                                type="email"
                                {...register("email")}
                                className={`w-full p-2 border rounded ${errors.email ? "border-red-500" : "border-gray-300"}`}
                            />
                            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-sm">Password</label>
                            <input
                                type="password"
                                {...register("password")}
                                className={`w-full p-2 border rounded ${errors.password ? "border-red-500" : "border-gray-300"}`}
                            />
                            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
                        </div>

                        {/* Role Field */}
                        <div>
                            <label className="block text-sm">Role</label>
                            <select
                                {...register("role")}
                                className={`w-full p-2 border rounded ${errors.role ? "border-red-500" : "border-gray-300"}`}
                            >
                                <option value="">Select Role</option>
                                {roleOptions.map((role) => (
                                    <option key={role.key} value={role.key}>{role.label}</option>
                                ))}
                            </select>
                            {errors.role && <p className="text-sm text-red-500">{errors.role.message}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700"
                            disabled={isLoading} // Disable button while loading
                        >
                            Register
                        </button>

                        {/* Show error if registration fails */}
                        {isError && error && (
                            <p className="text-sm text-red-500 mt-2">{(error as { message: string })?.message || "Registration failed"}</p>
                        )}

                    </form>
                </div>)
            }


        </div>
    );
};

export default Signup;
