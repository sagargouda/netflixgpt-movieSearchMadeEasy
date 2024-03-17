import {useDispatch, useSelector} from "react-redux";
import { API_OPTIONS } from "../constants/constants";
import {addTopRated} from "../utils/movieSlice";
import { useEffect } from "react";

function useTopRatedMovies() {
    const dispatch = useDispatch();

    const  topRatedMovies = useSelector(store => store.movies.topRatedMovies)

    const getTopRated = async () => {
        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
            if (!data.ok) {
                throw new Error('Failed to fetch data');
            }
            const json = await data.json();
            dispatch(addTopRated(json.results));
        } catch (error) {
            console.error('Error fetching popular movies:', error);
            // Handle the error (e.g., show a message to the user, retry logic, etc.)
        }
    }

    useEffect(() => {
        // memoized
        !topRatedMovies &&  getTopRated();
    }, []);


}

export default useTopRatedMovies;
