import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, BARD_KEY } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const genAI = new GoogleGenerativeAI(BARD_KEY);

  const searchMovie = async (movie) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching movie data:", error);
      return [];
    }
  };

  const handleGptSearchClick = async () => {
    try {
      
      const model = await genAI.getGenerativeModel({ model: "gemini-pro" });
      const query = `Act as a Movie Recommendation system and suggest some movies for the query: ${searchText.current.value}. Only give me names of 5 Movies, comma separated like the example result given ahead. Example Result: KGF CHAPTER 2,SALAAR, BAHUBALI, PK, KGF CHAPTER 1`;
      const result = await model.generateContent(query);
      const text = result?.response?.text();
      const movies = text ? text.split(",") : [];
      const bardResults = await Promise.all(movies.map((movie) => searchMovie(movie)));
      dispatch(addGptMovieResult({ movieNames: movies, movieResults: bardResults }));
    } catch (error) {
      console.error("Error during GPT search:", error);
    }
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg" onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
