import React from 'react';
import lang from "../utils/languagesConstants";
import {useSelector} from "react-redux";


function GptSearchBar(props) {
    const language = useSelector(store => store.config)
    return (
        <div className="pt-[10%] flex  justify-center ">
            <form className="w-1/2  bg-black grid grid-cols-12">
                <input className="col-span-9 p-4 m-4 " type="text" placeholder={lang[language.lang].gptSearchPlaceholder}/>
                <button className=" col-span-3 m-4 py-2 px-4 rounded-lg bg-red-600 text-white">{lang[language.lang].search}</button>
            </form>
        </div>
    );
}

export default GptSearchBar;