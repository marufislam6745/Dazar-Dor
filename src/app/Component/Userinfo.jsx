import React from 'react';

const Userinfo = () => {
    return (
        <div>
            <button
                className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-green-800 transition"
            >
                সাইন ইন
            </button>
            <button
                className="bg-green-700 hover:bg-green-800 text-white text-sm font-medium px-4 py-1.5 rounded-lg transition duration-200"
            >
                সাইন আপ
            </button>
        </div>
    );
};

export default Userinfo;