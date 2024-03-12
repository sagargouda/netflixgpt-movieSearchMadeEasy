import {useDispatch, useSelector} from "react-redux";
import {API_OPTIONS} from "../constants/constants";
import {addTrailerVideo} from "../utils/movieSlice";
import {useEffect} from "react";

//  custom hook
function useGetTrailerVideo(movieId){

    const dispatch = useDispatch()

//  fetching trailer video
    const getMovieTrailer = async() => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json();
        // console.log(json)

        //      filter only trailer here json.results is an array
        // if there is no trailer just show some video we get from json.results
        const filterData = json.results.filter((movie)=>{
            return movie.type === "Trailer"
        })
        const trailer = filterData.length ? filterData[0] : json.results[0]
        // console.log(trailer)

        //     dispatching an action to store trailer id in redux store in movie slice)
        dispatch(addTrailerVideo(trailer))

    }

    useEffect(() => {
        getMovieTrailer()
    }, []);



}

export default useGetTrailerVideo