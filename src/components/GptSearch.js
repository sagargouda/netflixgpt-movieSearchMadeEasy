import React from 'react';
import Suggestions from "./Suggestions";
import GptSearchBar from "./GptSearchBar";

function GptSearch(props) {
    return (
        <div >
            {/*Banner*/}
            <div className="fixed -z-10  w-screen h-screen">
                <img  className="w-screen h-screen object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="banner"/>
            </div>
         <div className=" md:p-0">
             <GptSearchBar/>
             <Suggestions/>
         </div>

        </div>
    );
}

export default GptSearch;