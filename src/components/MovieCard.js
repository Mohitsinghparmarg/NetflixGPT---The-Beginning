import { IMG_CDN_URL } from "../utils/constants"


const MovieCard = ({poster_path}  ) => {
  if(!poster_path) return null;
  return (
    <div className="w-36 md:w-48 pl-2">
        <img alt="Movie Card" 
          src= {IMG_CDN_URL + 
            poster_path
            } />
    </div>
  )
}

export default MovieCard