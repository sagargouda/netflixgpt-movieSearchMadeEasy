import React from 'react';
import { CiPlay1 } from "react-icons/ci";

function VideoTitle({title , overview}) {
    return (
        <div className="pt-[15%] px-6 md:px-24 absolute  text-white bg-gradient-to-r from-black w-screen aspect-video">
            <h1 className="hidden md:inline-block md:mb-6  md:text-5xl md:font-bold">{title}</h1>
            {/*<h1 className="hidden md:inline-block md:py-6 md:text-lg md:w-1/3">{overview}</h1>*/}
            {/* buttons */}
            <div>
                <button className=" hidden md:inline-block bg-white text-black font-bold py-1 md:py-4 px-2 md:px-12 text-lg rounded-md hover:bg-black hover:text-white "> ▶️Play</button>
                <button className=" hidden md:inline-block bg-white text-black mx-3 font-bold p-4 px-12 text-lg bg-opacity-50 rounded-md">More Info</button>
            </div>
        </div>
    );
}

export default VideoTitle;