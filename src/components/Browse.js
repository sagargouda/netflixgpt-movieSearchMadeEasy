import React from 'react';
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

function Browse(props) {

 useNowPlayingMovies()

    return (
        <div>
           <Header/>
            <MainContainer/>
           <SecondaryContainer/>
        </div>
    );
}

export default Browse;