
'use client'

import Link from 'next/link';

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from 'react';

const Page = () => {
  const [token, setToken] = useState('');
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const Token = searchParams.get('token');
    if (Token) {
      setToken(Token);
    }
    setLoading(false);
  }, [searchParams]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-4">Email Verification</h2>
      <p>Hello,</p>
      <p>Please click the following link to verify your email</p>
      <Link href="/login"className="text-blue-500 underline hover:text-blue-700 focus:outline-none">
       
          Email Verification complete please login to your account
    
      </Link>
      <p>If you didn t request this verification  you can ignore this email</p>
      <p>Thank you!</p>
    </div>
  );
};

export default Page;
