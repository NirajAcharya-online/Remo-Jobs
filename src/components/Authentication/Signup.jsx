import React, { useState } from "react";
import Input from "../Input";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { firebaseAuth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { setUser } from "../../firebase/database";

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => {
    navigate("/login");
  };
  const handleSignup = async (data) => {
    try {
      const response = await createUserWithEmailAndPassword(
        firebaseAuth,
        data.email,
        data.password
      );
      await updateProfile(response.user, { displayName: data.username });

      if (response.user) {
        const databaseResponse = await setUser(response.user);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isSubmitting },
  } = useForm();

  return (
    <div className="flex items-center h-1/2 mt-30 justify-center p-2 shadow-2xl flex-col bg-transparent border-2 border-black rounded-2xl  w-1/2 m-auto ">
      <form
        className="w-1/2  shadow-2xs flex flex-col items-center  justify-center "
        onSubmit={handleSubmit(handleSignup)}
      >
        <h2 className="font-bold text-xl font-mono text-gray-500 ">
          Please Signup
        </h2>

        <Input
          {...register("username", {
            required: "Username is required...",
            minLength: {
              value: 5,
              message: "Must be at least 5 characters",
            },
            pattern: {
              value: /^[A-Za-z0-9_]+$/,
              message: "Only letters, numbers, and underscores allowed",
            },
          })}
          label={"Username"}
          placeholder={"Username..."}
        />
        {errors.username && (
          <p className="text-red-500 text-xs mt-1" role="alert">
            {errors.username.message}
          </p>
        )}
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
        />
        {errors.password && (
          <p className="text-red-500 text-xs text-center mt-1" role="alert">
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
          className="py-2 rounded-2xl hover:bg-emerald-400-400 cursor-pointer font-serif px-3 bg-emerald-300 m-2 "
          disabled={isSubmitting || !isDirty}
        >
          Sign-Up
        </button>
      </form>
      <div className="text-xs flex gap-1 items-center">
        <span>Donot have a account</span>
        <span
          onClick={handleClick}
          className="cursor-pointer pl-0 p-3 text-blue-400"
        >
          Login
        </span>
      </div>
    </div>
  );
}
