import { API_OPTIONS } from '../../components/constants';
import { useSelector, useDispatch } from 'react-redux';
import { addTrailerVideo} from '../movieSlice'
import { useEffect } from 'react';

export const useTrailerVideo =(movieId)=>{
    const dispatcher = useDispatch()
    const trailerVideo = useSelector(state => state.movie?.trailerVideo);
  
    const getMovieDetails = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
      const json = await response.json();
     
      const trailerData = json.results.filter(video => video.type === 'Trailer');
      
      const trailer = trailerData.length > 0 ? trailerData[0] : json.results[0];
  
      dispatcher(addTrailerVideo(trailer));
    }
  
    useEffect(() => {
      getMovieDetails()
    }, []);

    return trailerVideo;
}