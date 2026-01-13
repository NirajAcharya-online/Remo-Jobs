import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { firebaseAuth } from "../../firebase/firebase";
import Input from "../Input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleClick = () => {
    navigate("/signup");
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isSubmitting },
  } = useForm();
  const handleSignIn = async (data) => {
    try {
      const response = await signInWithEmailAndPassword(
        firebaseAuth,
        data.email,
        data.password
      );
      const { user } = response;
      if (user.accessToken) {
        console.log("SUCESS");

        navigate("/", { replace: true });
      }
    } catch (error) {
      setError(error);
    }
  };
  return (
    <>
      <div className="flex items-center h-10/12  justify-center flex-col w-1/2 m-auto ">
        <form
          className="w-1/2 bg-transparent border-2 p-10 rounded-2xl  border-black h-fit shadow-2xs flex flex-col items-center justify-center "
          onSubmit={handleSubmit(handleSignIn)}
        >
          <h2 className="font-bold text-xl font-mono text-gray-500">
            Please Login
          </h2>
          <Input
            {...register("email", {
              required: "Email is required...",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email address",
              },
            })}
            placeholder={"Enter your email.."}
            type={"email"}
            label={"Email:"}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1" role="alert">
              {errors.email.message}
            </p>
          )}
          <Input
            {...register("password", {
              required: " Password is required...",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must be at least 8 characters, include uppercase, lowercase, a number, and a symbol",
              },
            })}
            placeholder={"Enter Your Password..."}
            type={"password"}
            label={"Password:"}
            autoComplete={"new-password"}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1" role="alert">
              {errors.password.message}
            </p>
          )}

          <Input
            {...register("confirmPassword", {
              required: "Please Confirm Your Password",
              validate: (value) =>
                value === watch("password") || "Password doesnot match",
            })}
            placeholder={"Confirm Your Password..."}
            type={"password"}
            label={"Confirm Password:"}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs text-center mt-1" role="alert">
              {errors.confirmPassword.message}
            </p>
          )}
          <button
            disabled={isSubmitting || !isDirty}
            className={`py-2 rounded-2xl hover:bg-green-400 ${
              !isSubmitting ? "bg-green-300" : "bg-gray-300"
            } cursor-pointer font-serif px-3 bg-green-300 mt-2`}
          >
            {isSubmitting ? "Loading..." : "Login"}
          </button>
        </form>
        <div className="w-full flex items-center flex-col justify-center">
          {error && (
            <div className="w-full flex justify-center  ">
              <h2 className="p-4 m-0 text-red-400 text-xs font-bold font-serif">
                Incorrect EMAIL AND PASSWORD
              </h2>
            </div>
          )}
          <div className="text-xs flex gap-1 items-center">
            <span>Donot have a account</span>
            <span
              onClick={handleClick}
              className="cursor-pointer pl-0 p-3 text-blue-400"
            >
              Signup
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
