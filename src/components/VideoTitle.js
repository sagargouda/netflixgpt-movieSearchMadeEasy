import React from 'react';
import { CiPlay1 } from "react-icons/ci";

function VideoTitle({title , overview}) {
    return (
        <div className="pt-36 px-12">
            <h1 className="text-6xl font-bold">{title}</h1>
            <h1 className="py-6 text-lg sm:w-1/2 md:w-1/2 lg:1/4">{overview}</h1>
            {/* buttons */}
            <div>

                <button className="bg-gray-400 text-white font-bold p-4 px-12 text-lg bg-opacity-50 rounded-md "> ▶️Play</button>
                <button className="bg-gray-400 mx-2 text-white font-bold p-4 px-12 text-lg bg-opacity-50 rounded-md">More Info</button>
            </div>
        </div>
    );
}

export default VideoTitle;