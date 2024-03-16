import React from 'react';
import {IMG_CDN_URL} from "../constants/constants";

function MovieCard({posterPath}) {
    // console.log(posterPath)
    console.log(posterPath)
    return (
        <div className="w-48 pr-4">
            {
                posterPath !== null ? <img className="border-2" src={IMG_CDN_URL + posterPath} alt="Movie Card"/> : <h1 className="text-white mt-24">No Image available</h1>
            }

        </div>
    );
}

export default MovieCard;