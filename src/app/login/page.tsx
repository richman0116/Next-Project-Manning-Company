"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Wrapper from "../Shared/Wrapper";
import { useRouter } from "next/navigation";
import { Linefont } from "next/font/google";
import Link from "next/link";

export default function Page() {
  const router = useRouter();
  const [user, setUser] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/user/login", user);
      toast.success("Login successful");
      router.push("/profile");
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        setErrorMessage("Invalid email or password");
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setButtonDisabled(!(user.email && user.password));
  }, [user.email, user.password]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Wrapper>
      <div className="flex flex-col pt-20 lg:pt-52 md:pt-52 bg-[#F9F9F9] items-center ">
        <h1 className="text-[16px] not-italic pt-12 font-SaolDisplayR">
          {loading ? "Processing" : "Login"}
        </h1>

        <div className="md:w-[520px] lg:w-[520px] p-6 pt-10">
          <label
            htmlFor="email"
            className="text-[16px] font-Akzidenz text-[#666]"
          >
            Your email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="w-full px-4 py-2 mb-4 border bg-[#F9F9F9] rounded-lg focus:outline-none focus:border-blue-500"
          />

          <div className="flex justify-between items-center">
            <label
              htmlFor="password"
              className="text-[16px] font-Akzidenz text-[#666]"
            >
              Your password
            </label>
            <div className=" flex flex-row gap-3">
              <button onClick={togglePasswordVisibility} className="ml-3">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              <p className="text-[16px] font-Akzidenz text-[#666]">Hide</p>
            </div>
          </div>
          <div className="flex items-center pb-4 w-full">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full px-4 py-2 border bg-[#F9F9F9] rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {errorMessage && <p className="text-red-500 my-2">{errorMessage}</p>}

          <a
            href="/forgotpassword"
            className="   border-b pb-1 text-[16px] font-Akzidenz text-[#666] "
          >
            Forget your password?
          </a>
          {/* Login Button */}
          <div className="flexCenter">
            <button
              onClick={handleLogin}
              disabled={buttonDisabled}
              className={`px-4 py-2 mt-4 text-white  text-[16px] font-Akzidenz flex justify-center  bg-black    ${
                buttonDisabled ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </div>

        {/* Additional Links */}

        <p className="pt-6 pb-10 ">
          <Link
            href="/signup"
            className="border-b pb-1 text-[16px] font-Akzidenz text-[#666]  "
          >
            Create account
          </Link>
        </p>
      </div>
    </Wrapper>
  );
}
