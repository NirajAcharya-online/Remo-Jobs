import Input from "../Input";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { firebaseAuth } from "../../firebase/firebase";
import { replace, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { setUser } from "../../firebase/database";
import { toast } from "react-toastify";

export default function Signup() {
  const navigate = useNavigate();
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
        navigate("/", { replace: true });
        toast.success("Signup sucessfull..!", {
          theme: "colored",
          autoClose: 1500,
          style: {
            fontWeight: "bold",
          },
        });
      }
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isSubmitting },
  } = useForm();
  return (
    <div className="flex items-center justify-center h-full  px-4">
      <form
        className="w-full max-w-md bg-white border-2 border-gray-300 p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col gap-4"
        onSubmit={handleSubmit(handleSignup)}
      >
        <h2 className="text-center font-bold text-xl sm:text-2xl font-mono text-gray-700 mb-4">
          Please Signup
        </h2>

        <Input
          {...register("username", {
            required: "Username is required...",
            minLength: { value: 5, message: "Must be at least 5 characters" },
            pattern: {
              value: /^[A-Za-z0-9_]+$/,
              message: "Only letters, numbers, and underscores allowed",
            },
          })}
          label={"Username"}
          placeholder={"Username..."}
          autoComplete={"off"}
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
          autoComplete={"off"}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1" role="alert">
            {errors.email.message}
          </p>
        )}

        <Input
          {...register("password", {
            required: "Password is required...",
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
          <p className="text-red-500 text-xs mt-1 text-center" role="alert">
            {errors.password.message}
          </p>
        )}

        <Input
          {...register("confirmPassword", {
            required: "Please Confirm Your Password",
            validate: (value) =>
              value === watch("password") || "Password does not match",
          })}
          placeholder={"Confirm Your Password..."}
          type={"password"}
          label={"Confirm Password:"}
          autoComplete={"off"}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs mt-1 text-center" role="alert">
            {errors.confirmPassword.message}
          </p>
        )}

        <button
          className={`mt-4 py-2 px-4 rounded-2xl font-serif text-white transition-colors 
                    ${
                      !isSubmitting
                        ? "bg-emerald-500 hover:bg-emerald-600"
                        : "bg-gray-300"
                    }`}
          disabled={isSubmitting || !isDirty}
        >
          {isSubmitting ? "Loading..." : "Sign Up"}
        </button>

        <div className="flex justify-center items-center gap-1 text-xs mt-4">
          <span>Already have an account?</span>
          <span
            onClick={handleClick}
            className="cursor-pointer text-blue-400 hover:underline"
          >
            Login
          </span>
        </div>
      </form>
    </div>
  );
}
