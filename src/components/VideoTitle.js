import React from 'react';
import { CiPlay1 } from "react-icons/ci";

function VideoTitle({title , overview}) {
    return (
        <div className="pt-[15%] px-24 absolute  text-white bg-gradient-to-r from-black w-screen aspect-video">
            <h1 className="text-5xl font-bold">{title}</h1>
            <h1 className="py-6 text-lg w-1/3">{overview}</h1>
            {/* buttons */}
            <div>
                <button className="bg-white text-black font-bold p-4 px-12 text-lg rounded-md hover:bg-black hover:text-white "> ▶️Play</button>
                <button className="bg-white text-black mx-3 font-bold p-4 px-12 text-lg bg-opacity-50 rounded-md">More Info</button>
            </div>
        </div>
    );
}

export default VideoTitle;