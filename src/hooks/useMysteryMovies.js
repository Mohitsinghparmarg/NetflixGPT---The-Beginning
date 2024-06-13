import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {addMysteryMovies} from "../utils/moviesSlice";
import { useEffect } from "react";



const useMysteryMovies = () => {
    const dispatch = useDispatch();
    const MysteryMovies = useSelector(store => store.movies.MysteryMovies);

    const getMysteryMovies = async () => {
 
        const data = await fetch(
            'https://api.themoviedb.org/3/trending/tv/day?language=en-US', 
         API_OPTIONS
        );
       const json =  await data.json();
      
       dispatch(addMysteryMovies(json.results));
    };
 
    useEffect ( () => {
        !MysteryMovies && getMysteryMovies ();
    },[]);
}

export default useMysteryMovies;