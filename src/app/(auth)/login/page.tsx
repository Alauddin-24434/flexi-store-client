"use client";

import { useForm } from "react-hook-form";
import { JwtPayload, TUser } from "@/types"; // Your TypeScript interface for user data
import { zodResolver } from "@hookform/resolvers/zod";

import { useLoginMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { setUser } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";

import Loading from "@/app/loading";
import { LoginValidationSchema } from "@/schemas/validationSchema";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm<TUser>({
    resolver: zodResolver(LoginValidationSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: TUser) => {
    try {
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
        router.push("/");
      }
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (

    <div className="flex items-center justify-center min-h-screen">
      {isLoading ? (
        <Loading />
      ) : (
        <div className=" w-96 rounded-lg shadow-lg p-5 bg-[#e0f1f2]">
          <h2 className="text-2xl font-bold pb-5 text-[#0b7670]">Sign In</h2>
          <form onSubmit={handleSubmit(onSubmit)} >
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Email</label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className={`mt-1 w-full p-3 outline-none rounded-md bg-[#0d938f] hover:bg-[#0b7670] text-white placeholder:text-white 
    ${errors.email ? "border-red-500 focus:ring-2 focus:ring-red-500" : " focus:ring-2 focus:bg-[#0b7670]"}
  `}
                placeholder="Enter your email"
              />

              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 text-sm font-medium">Your password</label>
              <input
                id="password"
                type="password"
                {...register("password")}
                className={`mt-1 w-full p-3 outline-none rounded-md bg-[#0d938f] hover:bg-[#0b7670] text-white placeholder:text-white  ${errors.password ? "border-red-500 focus:ring-red-500" : "border-gray-300 "
                  }`}
                placeholder="Enter your password"
              />
              {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>}
            </div>
            <div>
              <p className="text-red-500 pb-5"></p>
            </div>
            <div className="flex items-center justify-between mb-4">
              <button
                type="submit"
                className="uppercase py-2 px-3 sm:py-3 sm:px-5 rounded-md bg-[#0d938f] hover:bg-[#0b7670] text-white text-sm sm:text-base w-full sm:w-auto"
              >
                Register
              </button>
              <div className="flex items-center text-sm">
                <p>Already have an account?</p>
                <Link href={'/signup'}>
                  <p className="underline cursor-pointer ml-1 text-[#0b7670]">Sign up</p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>


  );
};

export default Login;


