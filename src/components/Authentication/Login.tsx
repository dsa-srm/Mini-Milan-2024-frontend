// import useLogin from "@/features/Authentication/useLogin";
import useLogin from "@/features/Authentication/useLogin";
// import useUser from "@/features/Authentication/useUser";
import React from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast"
interface SignInForm {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>();
  const { toast } = useToast()
  //   const onSubmit = (data: SignInForm) => {
  //     console.log(data);
  //     // subit logic
  //   };

  const { isLoading, loginError, login } = useLogin();
  // const { isLoading:userLoading, user:userDetail } = useUser();

  const onSubmit = async (data: SignInForm) => {
    try {
       login(data);
      console.log(loginError);
    } catch (error) {
      console.error("Login error:", loginError,error);
      toast({
        title: "Error",
        description: "Failed to log in. Please check your credentials.",
      })
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#130c1a] loginPageContainer ">
      <div className="max-w-full w-[90vw] md:w-4/6 lg:max-w-[500px]  shadow-lg p-6 space-y-6 relative z-[1] border-4 ">
        <h2 className="text-[3rem] font-['unbounded',sans-serif] md:text-4xl lg:text-5xl font-bold text-center text-white mb-6">
          Sign In
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
          <div className="flex flex-col">
            <label
              className="text-slate-100 text-[2rem] md:text-lg lg:text-xl font-bold mb-2"
              htmlFor="email"
            >
              EMAIL
            </label>
            <input
              type="email"
              {...register("email", {
                required: "SRM email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@srmist\.edu\.in$/,
                  message: "Invalid email address",
                },
              })}
              className="form-input mt-1 block w-full rounded-md border-2 bg-transparent px-4 border-white  h-[45px] text-[1.8rem]  placeholder:text-white focus:outline-none focus:text-white placeholder:opacity-50 "
              id="email"
              placeholder="your-email@srmist.edu.in"
            />
            {errors.email && (
              <p className="text-white text-[1.3rem] mt-[5px]  ">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-slate-100 text-[1.5rem] md:text-lg lg:text-xl font-bold mb-2"
            >
              PASSWORD
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
              })}
              className="form-input mt-1 block w-full rounded-md border-2 bg-transparent px-4 border-white  h-[45px] text-[1.8rem]  placeholder:text-white focus:outline-none focus:text-white placeholder:opacity-50 "
              id="password"
              placeholder="********"
            />
            {errors.password && (
              <p className="text-white text-[1.3rem] mt-[5px]">{errors.password.message}</p>
            )}
          </div>
        
          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              disabled={isLoading}
              className="bg-violet-800 hover:bg-violet-800/90 text-white md:text-[1.5rem] font-bold px-8 py-4 md:py-6 md:px-12 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-[0.3rem] text-[1.5rem] w-full mt-[20px] "
              type="submit"
            >

{
isLoading ? (
  <div className="flex items-center justify-center ">
<svg className="animate-spin h-10 w-10 mr-3 ..." viewBox="0 0 24 24">
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
  </div>
  
) : ("Sign In")
}


            </button>
          </div>

          {/* Register Link */}
          <div className="text-center">
            <p className="text-slate-100 text-[1.5rem] ">
              Don't have an account?
              <a
                href="/signup"
                className="text-white  ml-2  font-bold "
              >
                Signup Here.
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
