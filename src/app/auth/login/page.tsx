"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import toast from "react-hot-toast";

const SignIn: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      router.push("/shop");
      toast.success("Log in succesfull");
      setIsLoading(false);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      toast.error(errorMessage);
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form
        onSubmit={handleSignUp}
        className="flex flex-col gap-y-6 w-2/5 px-[30px] py-6 shadow-xl rounded-xl"
      >
        <div className="pt-[12px] py-1 pl-[20px] outline-none border-[1.5px] border-black/50 rounded-lg  transition-all relative group focus-within:border-green-600">
          <input
            type="email"
            value={email}
            className="focus:outline-none w-full text-black/50 text-[14px]"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="absolute top-0 left-2 bg-white -mt-[14px] px-2 text-gray-500 text-[14px]">
            Email
          </label>
        </div>
        <div className="pt-[12px] py-1 pl-[20px] outline-none border-[1.5px] border-black/50 rounded-lg  transition-all relative group focus-within:border-green-600">
          <input
            type="password"
            value={password}
            className="focus:outline-none w-full text-black/50"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label className="absolute top-0 left-2 bg-white -mt-[14px] px-2 text-gray-500 text-[14px]">
            Password
          </label>
        </div>

        <button
          type="submit"
          className="py-[10px] bg-green-600 hover:bg-black transition-all text-white rounded-lg"
        >
          {isLoading ? "Please wait" : "Login"}
        </button>

        <p className="text-center text-black/50">
          Don&#39;t have an account?
          <Link href="/auth/signup">
            <span className="text-green-600 ml-1">Signup</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
