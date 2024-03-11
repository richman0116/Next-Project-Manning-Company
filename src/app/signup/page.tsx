'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import { toast } from 'react-toastify';
export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/signup", user);
            console.log("Signup success", response.data);
            router.push("/login");
            
        } catch (error:any) {
            console.log("Signup failed", error.message);
            
            toast.error(error.message);
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);


    return (
        <div className="flex flex-col items-center mt-8">
            <h1 className="text-2xl font-bold">{loading ? "procising" : "singup"}</h1>

            <hr className="w-full my-4" />

            <div className="w-64">
                <label htmlFor="username" className="block mb-1 font-medium text-gray-700">
                    Username
                </label>
                <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    className="w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />

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

                <button
                    onClick={onSignup}
                    className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                 {buttonDisabled ? "No signup" : "Signup"}
                </button>
            </div>

       

            <Link href="login" className="text-blue-500 hover:underline">
                Already registered? Log in here
            </Link>
        </div>
    );
} 