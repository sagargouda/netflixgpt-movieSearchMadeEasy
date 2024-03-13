import React from 'react';
import MovieList from "./MovieList";
import {useSelector} from "react-redux";

function SecondaryContainer(props) {
    const movies = useSelector(store=>store.movies.nowPlayingMovies)
    return (
        <div>
            <MovieList title={"Now Playing"} movies={movies}/>
            <MovieList title={"Trending"} movies={movies}/>
            <MovieList title={"Popular"} movies={movies}/>
            <MovieList title={"Upcoming"} movies={movies}/>
            <MovieList title={"Horror"} movies={movies}/>
        </div>
    );
}

export default SecondaryContainer;