import React from 'react'
import './Result.css'
import { useMovieContext } from './context/GlobalContext'
import * as actions from './context/ActionType'

const Result = ({movie}) => {
    const MovieContext=useMovieContext();
    const storedMovie=MovieContext.watchlist.find((o)=> o.imdbID === movie.imdbID);
    const storedMovieWatched=MovieContext.watched.find((o)=> o.imdbID === movie.imdbID);
    const watchlistDisable = storedMovie ? true : storedMovieWatched ? true :false;
    const WatcheDisabled = storedMovieWatched ? true : false;



  return (
       <div className='result-card'>
        <div className='poster-wrapper'>
            {
                movie.Poster ? (
                    <img src={movie.Poster} alt={movie.Title}></img>
                ): <div className='filter-poster'></div>
            }
        </div>
        <div className="info">
            <div className="">
                <h3 className='title'>{movie.Title}</h3>
                {movie.Year ? <h4 className='release-date'>{movie.Year}</h4> : '-'}
                </div>
                <div className="controls">
                    <button onClick={()=> MovieContext.moviesDispatch({
                        type: actions.ADD_MOVIE_TO_WATCHLIST, paylod:movie
                    })} className='btn' disabled={watchlistDisable}>Add to Watchlist</button>
                    <button onClick={()=> MovieContext.moviesDispatch({
                        type:actions.ADD_MOVIE_TO_WATCHEED,
                        paylod:movie
                    })} className='btn' disabled={WatcheDisabled}>Add to Watched</button>
 
                </div> 
                </div>
             
                </div>

  )
}

export default Result
