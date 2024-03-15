//  custom hook for making an api call to get now playing upcoming movies

import {useDispatch} from "react-redux";
import {API_OPTIONS} from "../constants/constants";
import {addUpcomingMovies} from "../utils/movieSlice";
import {useEffect} from "react";

function useUpcomingMovies(){

    const dispatch = useDispatch()
    // now we will make this async because we are fetching something
    const getUpcomingMovies = async () =>{
        const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)

        const json = await data.json();
        // console.log(json.results)
        //   dispatching an action and storing it in my store (movie slice)
        dispatch(addUpcomingMovies(json.results))
    }

    useEffect(()=>{
        //  i want to call it only once
        getUpcomingMovies()
    }, [])


}

export default useUpcomingMovies