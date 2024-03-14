import React from 'react';

function GptSearchBar(props) {
    return (
        <div className="pt-[10%] flex  justify-center ">
            <form className="w-1/2  bg-black grid grid-cols-12">
                <input className="col-span-9 p-4 m-4 " type="text" placeholder="What Would you like to watch today"/>
                <button className=" col-span-3 m-4 py-2 px-4 rounded-lg bg-red-600 text-white">Search</button>
            </form>
        </div>
    );
}

export default GptSearchBar;