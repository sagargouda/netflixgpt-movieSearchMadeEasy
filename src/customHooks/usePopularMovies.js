import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

function usePopularMovies() {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
            if (!data.ok) {
                throw new Error('Failed to fetch data');
            }
            const json = await data.json();
            dispatch(addPopularMovies(json.results));
        } catch (error) {
            console.error('Error fetching popular movies:', error);
            // Handle the error (e.g., show a message to the user, retry logic, etc.)
        }
    }

    useEffect(() => {
        getPopularMovies();
    }, []);


}

export default usePopularMovies;
