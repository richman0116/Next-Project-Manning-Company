import React from 'react';

function Page ({ params }: any) {
    return (
        <div className="flex flex-col items-center mt-8">
            <h1 className="text-2xl font-bold mb-4">Profile</h1>
            <hr className="w-full my-2" />
            <h1 className="text-xl font-semibold my-4">
                UserProfile Page <span className="text-blue-500">{params.id}</span>
            </h1>
        </div>
    );
}

export default Page ;