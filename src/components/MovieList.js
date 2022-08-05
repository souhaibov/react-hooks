import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({text,movies,rate}) => {

  
  return (
    <div>
    
      <div>
      {movies?.filter((el)=>el.rate===rate).map((data,i)=>(
              <MovieCard key={i} movie={data}/>
          ))} 
      {movies?.filter((el)=>el.title.toUpperCase().includes(text.toUpperCase())).map((data,i)=>(
              <MovieCard key={i} movie={data}/>
          ))} 
      
          
      </div>
      
      
      
    </div>
  )
}

export default MovieList