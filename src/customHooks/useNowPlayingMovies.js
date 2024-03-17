//  custom hook for making an api call to get now playing movies list

import {useDispatch, useSelector} from "react-redux";
import {API_OPTIONS} from "../constants/constants";
import {addNowPlayingMovies} from "../utils/movieSlice";
import {useEffect} from "react";

function useNowPlayingMovies(){

    const dispatch = useDispatch()
    // now we will make this async because we are fetching something



    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)





    const getNowPlayingMovies = async () =>{
        const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)

        const json = await data.json();
        // console.log(json.results)
        //   dispatching an action and storing it in my store (movie slice)
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(()=>{
        //  i want to call it only once
        //  memoizing
        if(!nowPlayingMovies){
            getNowPlayingMovies()
        }
    }, [])


}

export default useNowPlayingMovies
