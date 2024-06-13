import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
      const movies = useSelector(store => store.movies);
  return (
    movies.nowPlayingMovies && (
    <div className='bg-black'>
     <div className='-mt-52 pl-12 relative z-20 hover:'>
        <MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies} />
        <MovieList title = {"Trending Movies"} movies = {movies.UpcomingMovies} />
        <MovieList title = {"Popular Movies"} movies = {movies.PopularMovies} />
        <MovieList title = {"Trending Shows"} movies = {movies.MysteryMovies} />
        <MovieList title = {"Upcoming Movies"} movies = {movies.UpcomingMovies} />
        <MovieList title = {"Top Rated Movies"} movies = {movies.TopRatedMovies} />
     </div>
    </div>
    )
  );
};

export default SecondaryContainer;