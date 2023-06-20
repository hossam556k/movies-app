import React from 'react'
import { useMovieContext } from './context/GlobalContext'
import * as actions from "./context/ActionType"

const MovieControls = ({movie , type}) => {
  const MovieContext = useMovieContext() 
  return (
    <div className='inner-card-controls'>
    {
      type ==="watchlist" &&(
        <>
          <button onClick={()=> MovieContext.moviesDispatch({
            type :actions.ADD_MOVIE_TO_WATCHEED,
            paylod: movie

          })} className="ctrl-btn">
            <i className="fa-solid fa-eye"></i>
          </button>
          <button onClick={()=> MovieContext.moviesDispatch({
           type: actions.REMOVE_MOVIE_FROM_WATCHLIST, paylod:movie.imdbID


          })}  className="ctrl-btn"
      
          >
            <i className='fa-fw fa fa-times' />
          </button>
        </>
   )} 
   {
      type ==="watched" &&(
        <>
          <button onClick={()=>MovieContext.moviesDispatch({
            type:actions.MOVIE_TO_WATCHLIST,
            paylod:movie,
          })}
            className="ctrl-btn"
            

          >
            <i className="fa-solid fa-eye-slash"></i>
          </button>
          <button onClick={()=>MovieContext.moviesDispatch({
            type:actions.REMOVE_MOVIE_FROM_WATCHED,
            paylod:movie.imdbID,
          })}
            className="ctrl-btn"
      
          >
            <i className='fa-fw fa fa-times' />
          </button>
        </>
   )} 
      

      
    </div>
  )
}

export default MovieControls
