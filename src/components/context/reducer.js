import * as actions from "./ActionType"

export const reducer = (state,action)=>{
switch(action.type){
    case actions.ADD_MOVIE_TO_WATCHLIST:
        return {
            ...state,
            watchlist :[action.paylod,...state.watchlist]
        };
        case actions.REMOVE_MOVIE_FROM_WATCHLIST:
            return {
                ...state,
                watchlist: state.watchlist.filter((movie)=> movie.imdbID !== action.paylod)

                };
                case actions.MOVIE_TO_WATCHLIST:
                    return {
                        ...state,
                        watched :state.watched.filter((movie)=> movie.imdbID !== action.paylod.imdbID),
                        watchlist:[action.paylod,...state.watchlist]
                    };
                    case actions.ADD_MOVIE_TO_WATCHEED:
                        return {
                            ...state,
                            watchlist :state.watchlist.filter((movie)=>movie.imdbID !== action.paylod.imdbID),
                            watched: [action.paylod, ...state.watched],
                        };
                        case actions.REMOVE_MOVIE_FROM_WATCHED:
                            return {
                                ...state,
                                watched: state.watched.filter((movie)=> movie.imdbID !== action.paylod),
                
                                };
                                default : 
                                return state;
                    

}
}