import React from 'react';
import MovieCard from "./MovieCard";

function MovieList({title , movie}) {
    if (!movie) {
        return null;
    }
    // console.log(movie)
    return (
        <div className="px-6  ">
            <h1 className="text-3xl py-4 text-white">{title}</h1>
            <div className=" container-snap flex overflow-scroll">

                <div className={"flex"}>
                    {
                        movie.map((item)=>{
                            return <MovieCard key={item.id} posterPath={item?.poster_path}/>
                        })
                    }
                </div>
            </div>


        </div>
    );
}

export default MovieList;