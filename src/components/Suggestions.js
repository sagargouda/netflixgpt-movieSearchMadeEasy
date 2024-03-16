import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MovieList from "./MovieList";

function Suggestions(props) {

    const gpt = useSelector(store => store.gpt);
    const { movieNames , movieResults } = gpt;

    if(!movieNames ){
        return null
    }

    return (
        <div className="p-4 m-4 bg-black text-white bg-opacity-70">
            <div>
                {
                    movieNames.map((movieName,index)=>{
                        return  <MovieList
                            key={movieName}
                            title={movieName}
                            movie={movieResults[index] !== 0 ? movieResults[index] : null}/>
                    })
                }
            </div>
        </div>
    );
}

export default Suggestions;
