import React from 'react';
import MovieList from "./MovieList";
import {useSelector} from "react-redux";

function SecondaryContainer(props) {
    const getMovies = useSelector(store=>store.movies)
  console.log(getMovies)
    return (
        getMovies && (
            <div className="w-screen bg-black">
                <div className="-mt-44 pl-12 relative z-20">
                    <MovieList title={"Now Playing"} movie={getMovies?.nowPlayingMovies}/>
                    <MovieList title={"Popular"} movie={getMovies?.popularMovies}/>
                    <MovieList title={"Top Rated"} movie={getMovies?.topRatedMovies}/>
                    <MovieList title={"Upcoming movies"} movie={getMovies?.upcomingMovies}/>

                </div>

            </div>
        )

    );
}

export default SecondaryContainer;