import React from 'react'
import './Add.css'
import {useState ,useEffect} from "react";
import axios from 'axios';
import Result from './Result';
 
const Add = () => {
    const [searchValue , setSearchValue] = useState("");
    const [movies ,setMovie]= useState([]);

    useEffect(()=>{
        axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=1041be48`).then((response)=>{
            if (response.data.Search)
            {
                setMovie(response.data.Search);
            }

        }).catch((error)=> console.log(error))

    },[searchValue])
  return (
    <div className="add-page">
    <div className="container">
        <div className="add-content">
            <div className="input-container">
                <input type='text' placeholder="Search fpr a movie" value={searchValue} onChange={(e)=> setSearchValue(e.target.value)}/>
            </div>
            {
                movies.length > 0 &&( <ul className='results'>{movies.map((movie)=> (<li key={movie.imdbID}>
                    {<Result movie={movie}/>}
                

                </li>))}</ul>
            )}
        </div>
    </div>
      
    </div>
  )
}

export default Add
