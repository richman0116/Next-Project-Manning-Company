'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: '',
        password: '',
        username: '',
    });
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isEmailRegistered, setIsEmailRegistered] = useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post('/api/signup', user);
            console.log('Signup success', response.data);
            toast.success('Signup successful! Please login to your account.'); 
            router.push('/login');
        } catch (error:any) {
            console.log('Signup failed', error.message);
            if (
                error.response &&
                error.response.status === 400 &&
                error.response.data.error === 'User already exists'
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
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);


    return (
        <div className="flex flex-col items-center mt-8">
            <h1 className="text-2xl font-bold">{loading ? "processing" : "signup"}</h1>
            <hr className="w-full my-4" />
            {isEmailRegistered && (
                <p className="text-red-500 mb-4">You have already registered. Please login to your account.</p>
            )}
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
                    onChange={(e) => {
                        setUser({ ...user, email: e.target.value });
                        setIsEmailRegistered(false); 
                    }}
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
                    disabled={buttonDisabled}
                    className={`w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none ${
                        buttonDisabled ? 'cursor-not-allowed opacity-50' : ''
                    }`}
                >
                    {loading ? 'Signing up...' : 'Signup'}
                </button>
            </div>
            <Link href="/login" className="text-blue-500 hover:underline mt-4">
                Already registered? Log in here
            </Link>
        </div>
    );
}
