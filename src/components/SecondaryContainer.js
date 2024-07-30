import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black ">
        <div className="mt-0 md:-mt-[150px] ml-5 md:pl-10 cursor-pointer relative z-40">
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
          <MovieList title="Trending Movies" movies={movies.UpcomingMovies} />
          <MovieList title="Popular Movies" movies={movies.PopularMovies} />
          <MovieList title="Trending Shows" movies={movies.MysteryMovies} />
          <MovieList title="Upcoming Movies" movies={movies.UpcomingMovies} />
          <MovieList title="Top Rated Movies" movies={movies.TopRatedMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
