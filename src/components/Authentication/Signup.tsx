import React from "react";
import { useForm } from "react-hook-form";
import Navbar from "../Header/Navbar";
import "./Signup.css";


interface SignUpForm {
  name: string;
  email: string;
  phoneNumber: string;
  registrationNumber: string;
  isSRMKTRStudent: boolean;
  gender: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignUpForm>();

  const onSubmit = (data: SignUpForm) => {
    console.log(data);
    // Your form submission logic here
  };
  return (
    <div className="flex justify-center items-center h-screen bg-[#130c1a] lg:pt-32 lg:pb-32 overflow-auto">
      <Navbar />
      <div className="relativelg:mt-28  max-w-full w-9/12 md:w-4/6 lg:w-2/6 bg-[#28242f] rounded-xl shadow-lg p-6 lg:p-12 ">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-6">
          Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div className="flex flex-col">
            <label
              className="text-slate-100 text-sm md:text-lg lg:text-xl font-bold mb-2"
              htmlFor="name"
            >
              NAME
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="form-input mt-1 block w-full border-gray-300 bg-[#71697e] rounded-md shadow-sm mb-4 lg:mb-8"
              id="name"
              placeholder="bob the builder"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label
              className="text-slate-100 text-sm md:text-lg lg:text-xl font-bold mb-2"
              htmlFor="email"
            >
              EMAIL
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email address",
                },
              })}
              className="form-input mt-1 block w-full border-gray-300 bg-[#71697e] rounded-md shadow-sm mb-4 lg:mb-8"
              id="email"
              placeholder="bobthebuilder@example.com"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Phone Number Field */}
          <div className="flex flex-col">
            <label
              className="text-slate-100 text-sm md:text-lg lg:text-xl font-bold mb-2"
              htmlFor="phoneNumber"
            >
              PHONE NUMBER
            </label>
            <input
              type="tel"
              {...register("phoneNumber", {
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
              className="form-input mt-1 block w-full border-gray-300 bg-[#71697e] rounded-md shadow-sm mb-4 lg:mb-8"
              id="phoneNumber"
              placeholder="1234567890"
            />
            {errors.phoneNumber && (
              <p className="text-red-600">{errors.phoneNumber.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-slate-100 text-sm md:text-lg lg:text-xl font-bold mb-2"
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
              className="form-input mt-1 block w-full border-gray-300 bg-[#71697e] rounded-md shadow-sm mb-4 lg:mb-8"
              id="password"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="flex flex-col">
            <label
              htmlFor="confirmPassword"
              className="text-slate-100 text-sm md:text-lg lg:text-xl font-bold mb-2"
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
              className="form-input mt-1 block w-full border-gray-300 bg-[#71697e] rounded-md shadow-sm mb-4 lg:mb-8"
              id="confirmPassword"
            />
            {errors.confirmPassword && (
              <p className="text-red-600">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Registration Number Field */}
          <div className="flex flex-col">
            <label
              className="text-slate-100 text-sm md:text-lg lg:text-xl font-bold mb-2"
              htmlFor="registrationNumber"
            >
              REGISTRATION NUMBER
            </label>
            <input
              type="text"
              {...register("registrationNumber", {
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
              className="form-input mt-1 block w-full border-gray-300 bg-[#71697e] rounded-md shadow-sm mb-4 lg:mb-8"
              id="registrationNumber"
              placeholder="RA201100306969"
            />
            {errors.registrationNumber && (
              <p className="text-red-600">
                {errors.registrationNumber.message}
              </p>
            )}
          </div>

          {/* Checkbox for SRMKTR Student */}
          <div className="flex items-center mb-4">
            <label
              htmlFor="isSRMKTRStudent"
              className="mr-2 block text-slate-100 text-sm md:text-lg lg:text-xl  font-bold "
            >
              STUDENT OF SRMKTR
            </label>
            <input
              type="checkbox"
              {...register("isSRMKTRStudent")}
              className="h-5 w-5 "
              id="isSRMKTRStudent"
            />
            
          </div>

          {/* Gender Field */}
          <div className="flex flex-col">
            <label
              className="text-slate-100 text-sm md:text-lg lg:text-xl font-bold mb-2"
              htmlFor="gender"
            >
              GENDER
            </label>
            <select
              {...register("gender", { required: "Gender is required" })}
              className="form-select px-[0.8rem] py-[1.2rem] text-[1.6rem] mt-1 block w-full bg-[#71697e] border-gray-300 rounded-md shadow-sm mb-4 lg:mb-8"
              id="gender"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-600">{errors.gender.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              className="bg-violet-800 hover:bg-[#b19cff] text-white md:text-[1.5rem] font-bold px-8 py-4 md:py-6 md:px-12 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
              type="submit"
            >
              Sign Up
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-slate-100">
              Already have an account?
              <a
                href="/login"
                className="text-blue-500 hover:text-blue-700 ml-2"
              >
                Login.
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
