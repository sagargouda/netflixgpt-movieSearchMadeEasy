import React from 'react';
import {useSelector} from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

function MainContainer(props) {
    //  this movies has 20 movies but in title i just need 1
    const movies = useSelector(store=>store.movies?.nowPlayingMovies)
    //  in redux store one first time it is null , so did a early return
    if(movies === null) return
    // main movie
    const mainMovie = movies[0];
    // console.log(mainMovie)

    //  destructuring
    const {original_title , overview} = mainMovie

    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground/>
        </div>
    );
}

export default MainContainer;