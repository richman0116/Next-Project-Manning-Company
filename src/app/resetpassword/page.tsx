
'use client'
import axios from 'axios';
import Link from 'next/link';
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from 'react';

export default function Page() {

  const [token, setToken] = useState('');
  const [error, setError] = useState(false);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [resetSuccess, setResetSuccess] = useState(false);
  const searchparms = useSearchParams()
  const resetPassword = async () => {
    try {
      await axios.post('/api/user/reset-password', { token, password });
      setResetSuccess(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const Token = searchparms.get('token');
    if (Token) {
      setToken(Token);
    }
    setLoading(false);
  }, [searchparms]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center  py-2">
    <h1 className="text-4xl font-bold mb-5">Reset Password</h1>
  
    {resetSuccess && (
      <div className="text-center">
        <h2 className="text-2xl mb-4">Password Reset Successful</h2>
        <Link href="/login" className="text-blue-500 hover:underline">
          Login
        </Link>
      </div>
    )}
  
    {error && (
      <div className="text-center">
        <h2 className="text-2xl bg-red-500 text-white px-4 py-2 rounded-md mb-4">Error</h2>
      </div>
    )}
  
    {!resetSuccess && !error && (
      <form onSubmit={(e) => { e.preventDefault(); resetPassword(); }} className="flex flex-col gap-4">
        <label htmlFor="password" className="text-lg font-semibold">New Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Reset Password
        </button>
      </form>
    )}
  </div>
  
  );
}
