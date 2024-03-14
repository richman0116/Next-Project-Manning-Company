'use client'
import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

function Page () {
    const router = useRouter();

    const handleLogout = async () => {
        
        try {
            await axios.get('/api/logout');
            toast.success('Logged out successfully');
            router.push('/login');
        } catch (error) {
            console.error('Error during logout:', error);
            toast.error('An error occurred during logout');
        }
    };

    return (
        <div className="flex flex-col items-center mt-8">
            <h1 className="text-2xl font-bold mb-4">Profile</h1>
            <hr className="w-full my-2 border-gray-300" />
            <h1 className="text-xl font-semibold my-4">Profile Page</h1>
            <hr className="border-gray-300" />
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4 hover:bg-blue-600"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
}

export default Page ;