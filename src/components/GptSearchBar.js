import { useDispatch, useSelector } from "react-redux"
import lang from "../utils/languageConstants"
import { useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, BARD_KEY } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const genAI = new GoogleGenerativeAI(BARD_KEY);

  const searchMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //make an api call to GPT API and get Movie Results
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const query =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me names of 5 Movies , comma seperated like the example result given ahead. Example Result: KGF CHAPTER 2,SALAAR, BAHUBALI, PK,KGF CHAPTER 1 ";
    const result = await model.generateContent(query);
    const response = await result.response;
    const text = await response.text();
    const movies = text.split(",");
    const promise = movies.map((movie) => searchMovie(movie));
    const bardResults = await Promise.all(promise);
    dispatch(
      addGptMovieResult({ movieNames: movies, movieResults: bardResults })
    );
    console.log(result.response?.candidates[0]?.content?.parts);
  };

  return (
    <div className="pt-[10%] flex justify-center">
           <form 
              className="w-1/2 bg-black grid grid-cols-12"
              onSubmit={(e) => e.preventDefault()}
             >
             <input 
               ref={searchText}
               type="text"
               className="p-4 m-4 col-span-9" 
               placeholder=  {lang[langKey].gptSearchPlaceholder}
             />
               <button
                   className=" col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
                   onClick={handleGptSearchClick}
                >
                  {lang[langKey].search}
             </button>
        </form>
    </div>
  )
}

export default GptSearchBar