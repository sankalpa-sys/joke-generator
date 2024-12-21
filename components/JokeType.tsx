import React from 'react';

const typeStyles: Record<string, string> = {
    general: "bg-red-100 text-red-800",
    programming: "bg-green-100 text-green-800",
    "knock-knock": "bg-purple-100 text-purple-800",
    dad: "bg-pink-100 text-pink-800",
};

function JokeType({ type }: { type: string }) {
    const style = typeStyles[type] || "bg-gray-100 text-gray-800"; // Default style
    return (
        <span className={`text-xs font-medium me-2 px-2.5 py-0.5 rounded ${style}`}>
            {type} joke
        </span>
    );
}

export default JokeType;

