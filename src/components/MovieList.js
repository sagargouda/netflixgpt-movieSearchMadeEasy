import React from 'react';
import MovieCard from "./MovieCard";

function MovieList({title , movies}) {
    console.log(movies)
    return (
        <div className="px-6 bg-black ">
            <h1 className="text-3xl py-4 text-white">{title}</h1>
            <div className=" container-snap flex overflow-scroll">

                <div className={"flex"}>
                    {
                        movies && movies.map(movie => <MovieCard key={movie.id} posterPath={movie?.poster_path}/>)
                    }


                </div>
            </div>


        </div>
    );
}

export default MovieList;