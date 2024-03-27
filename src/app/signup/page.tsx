"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { GrTask } from "react-icons/gr";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    lastname: "",
    firstname: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEmailRegistered, setIsEmailRegistered] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/user/signup", user);
      setIsEmailSent(true);
      console.log("Signup success", response.data);
      toast.success("Signup successful! Please login to your account.");
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.message);
      if (
        error.response &&
        error.response.status === 400 &&
        error.response.data.error === "User already exists"
      ) {
        setIsEmailRegistered(true);
      } else {
        setIsEmailRegistered(false);
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.firstname.length > 0 &&
      user.lastname.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col pt-20 lg:pt-52 md:pt-52 bg-[#F9F9F9] items-center ">
      <h1 className="text-[16px] not-italic pt-12 font-SaolDisplayR">
        {loading ? "Processing" : "Create account"}
      </h1>

      {isEmailRegistered && (
        <p className="text-red-500 mb-4">
          You have already registered. Please login to your account.
        </p>
      )}
      <div className="md:w-[520px] lg:w-[520px] p-6 pt-10">
        <label
          htmlFor="email"
          className="text-[16px] font-Akzidenz text-[#666]"
        >
          First name
        </label>
        <input
          id="firstname"
          type="text"
          placeholder="firstname"
          value={user.firstname}
          onChange={(e) => setUser({ ...user, firstname: e.target.value })}
          className="w-full px-4 py-2 mb-4 border bg-[#F9F9F9] rounded-lg focus:outline-none focus:border-blue-500"
        />
        <label
          htmlFor="email"
          className="text-[16px] font-Akzidenz text-[#666]"
        >
          Last name
        </label>
        <input
          id="lastname"
          type="lastname"
          placeholder="lastname"
          value={user.lastname}
          onChange={(e) => {
            setUser({ ...user, lastname: e.target.value });
            setIsEmailRegistered(false);
          }}
          className="w-full px-4 py-2 mb-4 border bg-[#F9F9F9] rounded-lg focus:outline-none focus:border-blue-500"
        />
        <label
          htmlFor="email"
          className="text-[16px] font-Akzidenz text-[#666]"
        >
          Your email
        </label>

        <input
          id="email"
          type="email"
          placeholder="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="w-full px-4 py-2 mb-4 border bg-[#F9F9F9] rounded-lg focus:outline-none focus:border-blue-500"
        />
        <label
          htmlFor="password"
          className="text-[16px] font-Akzidenz text-[#666]"
        >
          Your password
        </label>

        <input
          id="password"
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="w-full px-4 py-2 mb-4 border bg-[#F9F9F9] rounded-lg focus:outline-none focus:border-blue-500"
        />
        <div className=" flex gap-3">
          <div className=" pt-4">
            <GrTask />
          </div>
          <p className="text-[14px] font-Akzidenz text-[#666]">
            Use 8 or more characters <br />
            One Uppercase character <br />
            At least 1 numerical character
          </p>
        </div>
        <div className=" flexCenter">
          <button
            onClick={onSignup}
            disabled={buttonDisabled}
            className={`px-4 py-2 mt-4 text-white  text-[16px] font-Akzidenz flex justify-center  bg-black ${
              buttonDisabled ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            {loading ? "Signing up..." : "Signup"}
          </button>
        </div>
      </div>
      <p className="pt-6 pb-10 ">
        <Link
          href="/signup"
          className="border-b pb-1 text-[16px] font-Akzidenz text-[#666]  "
        >
          Sign In
        </Link>
      </p>
    </div>
  );
}
