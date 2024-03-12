import React from 'react';
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";

function Browse(props) {

 useNowPlayingMovies()


    return (
        <div>
           <Header/>
        </div>
    );
}

export default Browse;