import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useMysteryMovies from '../hooks/useMysteryMovies';

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
      useNowPlayingMovies();
      usePopularMovies();
      useUpcomingMovies();
      useTopRatedMovies();
      useMysteryMovies();
      

      
  return (
    <div>
      <Header/>
      {
           showGptSearch ? <GptSearch/> : (<>
                 <MainContainer/>
                 <SecondaryContainer/>
             </>
      )}
    </div>
  )
}

export default Browse