"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState(""); // State to hold error message

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/profile");
        } catch (error:any) {
            console.log("Login failed", error.message);
            if (error.response && error.response.status === 400) {
                if (error.response.data.error === "User does not exist") {
                    setErrorMessage("User does not exist");
                } else if (error.response.data.error === "Invalid password") {
                    setErrorMessage("Invalid password"); // Set error message for invalid password
                }
            } else {
                toast.error(error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="flex flex-col items-center mt-8">
            <h1 className="text-2xl font-bold">{loading ? 'Processing' : 'Login'}</h1>
            <hr className="w-full my-4" />
            <div className="w-64">
                <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    className="w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                <label htmlFor="password" className="block mb-1 font-medium text-gray-700">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    className="w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}
                <button
                    onClick={onLogin}
                    disabled={buttonDisabled}
                    className={`w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none ${buttonDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </div>
            <hr className="w-full my-4" />
            <Link href="/signup" className="text-blue-500 hover:underline">Not registered? Sign up here</Link>
        </div>
    );
}
