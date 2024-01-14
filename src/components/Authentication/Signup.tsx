import React from "react";
import { useForm } from "react-hook-form";
import { useToast } from "../ui/use-toast";
import useRegister from "@/features/Authentication/useRegister";




interface SignUpForm {
  name: string;
  email: string;
  password: string;
  reg_number: string;
  is_ktr_student: boolean;
  gender: string;
  phone_number: number;

  confirmPassword: string;
}

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignUpForm>();
  const { toast } = useToast();
  const { signupUser, isLoading } = useRegister();
  const onSubmit = async (data: SignUpForm) => {
    // console.log("inside submit");
    data.is_ktr_student = false;
    if (data.password !== data.confirmPassword) {
      toast({
        variant: "error",
        title: "Passwords do not match",
        description: "Please check your confirm password",
      });
      return;
    }
    try {
      signupUser(data);
    
      localStorage.setItem("isAuth", "false");
      // console.log(data);
    } catch (error) {
      console.error("Signup error:", error);
    }
  };
  

  
  return (
    <div className="flex justify-center items-center bg-[#130025] signupContainer min-h-screen pb-36 ">
      
      <div className="max-w-full w-[80vw] md:w-4/6 lg:w-3/6 bg-orange-500 rounded-2xl border-4  border-orange-300 shadow-lg md:p-6 space-y-6  relative z-[1] mt-[100px] ">
        <h2 className="text-4xl pt-[20px] md:text-4xl lg:text-5xl font-bold text-center text-white mb-6 font-['Unbounded',sans-serif]">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className=" md:flex  md:flex-row  justify-center items-center ">
            {/* Name Field */}
            <div className="flex flex-1 flex-col mx-[20px] ">
              <label
                className="text-slate-100 text-[1.5rem] md:text-lg lg:text-2xl font-bold mb-2"
                htmlFor="name"
              >
                NAME
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="form-input mt-1 mb-4 md:mb-0 block w-full rounded-2xl border-[3px] bg-[#ffe5d9] px-4 border-orange-300  h-[45px] text-[1.8rem]  placeholder:text-grey-700 placeholder:font-normal focus:outline-none text-violet-900 font-semibold placeholder:opacity-50  caret-violet-800 "
                id="name"
                placeholder="Enter Your Name"
              />
              {errors.name && (
                <p className="text-red-200 text-[1.3rem] mt-[5px] ">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="flex flex-1 flex-col mx-[20px] ">
              <label
                className="text-slate-100 text-[1.5rem] md:text-lg lg:text-2xl font-bold mb-2"
                htmlFor="email"
              >
                EMAIL
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "SRM Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@srmist\.edu\.in$/,
                    message: "Invalid SRM email address",
                  },
                })}
                className="form-input mt-1 block w-full rounded-2xl border-[3px] bg-[#ffe5d9] px-4 border-orange-300  h-[45px] text-[1.8rem]  placeholder:text-grey-700 placeholder:font-normal focus:outline-none text-violet-900 font-semibold placeholder:opacity-50  caret-violet-800 "
                id="email"
                placeholder="Enter Your SRM Email"
              />
              {errors.email && (
                <p className="text-red-200 text-[1.3rem] mt-[5px]">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className=" md:flex  md:flex-row  justify-center items-center">
            <div className="flex flex-1 flex-col mx-[20px]">
              <label
                htmlFor="password"
                className="text-slate-100 text-[1.5rem] md:text-lg lg:text-2xl font-bold mb-2"
              >
                PASSWORD
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                className="form-input mt-1 mb-4 md:mb-0 block w-full rounded-2xl border-[3px] bg-[#ffe5d9] px-4 border-orange-300  h-[45px] text-[1.8rem]  placeholder:text-grey-700 placeholder:font-normal focus:outline-none text-violet-900 font-semibold placeholder:opacity-50  caret-violet-800"
                id="password"
                placeholder="********"
              />
              {errors.password && (
                <p className="text-red-200 text-[1.3rem] mt-[5px]">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="flex  flex-1 flex-col mx-[20px]">
              <label
                htmlFor="confirmPassword"
                className="text-slate-100 text-[1.5rem] md:text-lg lg:text-2xl font-bold mb-2"
              >
                CONFIRM PASSWORD
              </label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  // validate: value => value === password || "The passwords do not match",
                  validate: (value) =>
                    value === getValues("password") ||
                    "The passwords do not match",
                })}
                className="form-input mt-1 block w-full rounded-2xl border-[3px] bg-[#ffe5d9] px-4 border-orange-300  h-[45px] text-[1.8rem]  placeholder:text-grey-700 placeholder:font-normal focus:outline-none text-violet-900 font-semibold placeholder:opacity-50  caret-violet-800"
                id="confirmPassword"
                placeholder="********"
              />
              {errors.confirmPassword && (
                <p className="text-red-200 text-[1.3rem] mt-[5px]">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          {/* Phone Number Field */}
          <div className="flex flex-col mx-[20px]">
            <label
              className="text-slate-100 text-[1.5rem] md:text-lg lg:text-2xl font-bold mb-2"
              htmlFor="phoneNumber"
            >
              PHONE NUMBER
            </label>
            <input
              type="tel"
              {...register("phone_number", {
                required: "Phone number is required",
                minLength: {
                  value: 10,
                  message: "Phone number must be 10 digits",
                },
                maxLength: {
                  value: 10,
                  message: "Phone number must be 10 digits",
                },
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must contain only digits",
                },
              })}
              className="form-input mt-1 block w-full rounded-2xl border-[3px] bg-[#ffe5d9] px-4 border-orange-300  h-[45px] text-[1.8rem]  placeholder:text-grey-700 placeholder:font-normal focus:outline-none text-violet-900 font-semibold placeholder:opacity-50  caret-violet-800"
              id="phoneNumber"
              placeholder="Enter Your Phone Number"
            />
            {errors.phone_number && (
              <p className="text-red-200 text-[1.3rem] mt-[5px]">
                {errors.phone_number.message}
              </p>
            )}
          </div>

          {/* Registration Number Field */}
          <div className="flex flex-col mx-[20px]">
            <label
              className="text-slate-100 text-[1.5rem] md:text-lg lg:text-2xl font-bold mb-2"
              htmlFor="registrationNumber"
            >
              REGISTRATION NUMBER
            </label>
            <input
              type="text"
              {...register("reg_number", {
                required: "Registration number is required",
                validate: {
                  length: (value) =>
                    value.length === 15 ||
                    "Registration number must be exactly 15 characters long",
                  startsWithRA: (value) =>
                    value.startsWith("RA") ||
                    "Registration number must start with 'RA'",
                },
              })}
              className="form-input mt-1 block w-full rounded-2xl border-[3px] bg-[#ffe5d9] px-4 border-orange-300  h-[45px] text-[1.8rem]  placeholder:text-grey-700 placeholder:font-normal focus:outline-none text-violet-900 font-semibold placeholder:opacity-50  caret-violet-800"
              id="registrationNumber"
              placeholder="Enter Your Registration Number"
            />
            {errors.reg_number && (
              <p className="text-red-200 text-[1.3rem] mt-[5px]">
                {errors.reg_number.message}
              </p>
            )}
          </div>

          {/* Checkbox for SRMKTR Student */}
          
          {/* Gender Field */}
          <div className="flex flex-col mx-[20px]">
            <label
              className="text-slate-100 text-[1.5rem] md:text-lg lg:text-2xl font-bold mb-2"
              htmlFor="gender"
            >
              GENDER
            </label>
            <select
              {...register("gender", { required: "Gender is required" })}
              className="form-input mt-1 block w-full rounded-2xl border-[3px] bg-[#ffe5d9] px-4 border-orange-300  h-[45px] text-[1.8rem]  placeholder:text-grey-700 placeholder:font-normal focus:outline-none text-violet-900 font-semibold placeholder:opacity-50  caret-violet-800"
              id="gender"
            >
              <option className="text-grey-100" value="">
                -Select Gender-
              </option>
              <option className="text-black" value="male">
                Male
              </option>
              <option className="text-black" value="female">
                Female
              </option>
              <option className="text-black" value="other">
                Other
              </option>
            </select>
            {errors.gender && (
              <p className="text-red-200 text-[1.3rem] mt-[5px]">
                {errors.gender.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mx-[20px]">
            <button
              // disabled={isLoading}
              className="bg-violet-800 hover:bg-violet-800/90 text-white md:text-[1.5rem] font-bold px-8 py-4 md:py-6 md:px-12 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-[0.3rem] text-[1.5rem] w-full mt-[20px] "
              type="submit"
            >
              {isLoading ? (
                <div className="flex items-center justify-center ">
                  <svg
                    className="animate-spin h-10 w-10 mr-3 ..."
                    viewBox="0 0 24 24"
                  >
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
              ) : (
                "Sign Up"
              )}
            </button>
          </div>

          {/* Login Link */}

          <div className="text-center">
            <p className="text-slate-100 text-[1.5rem] ">
              Already have an account?
              <a href="/login" className="text-white  ml-2  font-bold ">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
