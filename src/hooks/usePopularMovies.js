import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";



const usePopularMovies = () => {
    const dispatch = useDispatch();
    const PopularMovies = useSelector(store => store.movies.PopularMovies);
    const getPopularMovies = async () => {
 
        const data = await fetch(
         'https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc&year=2002', 
         API_OPTIONS
        );
       const json =  await data.json();
      
       dispatch(addPopularMovies(json.results));
    };
 
    useEffect ( () => {
        !PopularMovies && getPopularMovies();
    },[]);
}

export default usePopularMovies;