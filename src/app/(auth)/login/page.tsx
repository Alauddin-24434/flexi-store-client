"use client";

import { useForm } from "react-hook-form";
import { JwtPayload, TUser } from "@/types"; // Your TypeScript interface for user data
import { zodResolver } from "@hookform/resolvers/zod";

import { useLoginMutation } from "@/redux/features/auth/authApi"; // Your custom hook for registration API
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { setUser } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";

import Loading from "@/app/loading";
import { LoginValidationSchema } from "@/schemas/validationSchema";

const Login = () => {
  const router = useRouter();
  const [login, { isLoading, isError, error }] = useLoginMutation(); // Using the hook to register the user
  const dispatch = useAppDispatch();
  // Use the Zod validation schema with the React Hook Form resolver
  const { register, handleSubmit, formState: { errors } } = useForm<TUser>({
    resolver: zodResolver(LoginValidationSchema), // Apply Zod validation here
    defaultValues: { email: "", password: "" }, // Only email and password are needed for login
  });

  // On Submit handler
  const onSubmit = async (data: TUser) => {
    try {
      // Dispatch the login mutation and await response
      const res = await login(data).unwrap();
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
        router.push("/"); // Redirect after successful login
      }
      console.log("User Login", data);
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      {
        isLoading ? (<div><Loading/></div>) : (
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-center text-2xl font-semibold text-green-600 mb-6">Login</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Email Field */}
              <div>
                <label className="block text-sm">Email</label>
                <input
                  type="email"
                  {...register("email")} // Use register for email field
                  className={`w-full p-2 border rounded ${errors.email ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm">Password</label>
                <input
                  type="password"
                  {...register("password")} // Use register for password field
                  className={`w-full p-2 border rounded ${errors.password ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700"
                disabled={isLoading} // Disable button while loading
              >
                Login
              </button>

              {/* Show error if registration fails */}
              {isError && error && (
                            <p className="text-sm text-red-500 mt-2">{(error as { message: string })?.message || "Login failed"}</p>
                        )}
            </form>
          </div>
        )
      }
    </div>
  );
};

export default Login;
