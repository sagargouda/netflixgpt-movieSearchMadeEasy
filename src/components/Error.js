import React from 'react';

const Error = () => {
    return (
        <div className="bg-gray-100 h-screen flex items-center justify-center">
            <div className="text-center ">
                <svg
                    className="w-32 h-32 mx-auto text-orange-500 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12" y2="8" />
                </svg>
                <div className="tracking-widest mt-4">
          <span className="text-gray-500 text-6xl block">
            <span>4 0 4</span>
          </span>
                    <span className="text-gray-500 text-xl">
            Sorry, We couldn't find what you are looking for!
          </span>
                </div>

            </div>
        </div>
    );
};

export default Error;
