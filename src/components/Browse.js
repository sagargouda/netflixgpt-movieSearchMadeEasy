import React from 'react';
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import {useSelector} from "react-redux";

function Browse(props) {

    const selector = useSelector(store=>store.gpt)


 //  calling both custom hooks

        useNowPlayingMovies()
        usePopularMovies()
    useTopRatedMovies()
    useUpcomingMovies()



    return (
        <div >
            <Header/>
            {
                selector.showGptSearch ?
                    <GptSearch/>
                    :
                    <>
                        <MainContainer/>
                        <SecondaryContainer/>
                    </>
            }

        </div>
    );
}

export default Browse;