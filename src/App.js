import "./App.css";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import { useState } from "react";
//  import Rate from "./components/Rate";
import Data from "./components/Data";
import ReactStars from "react-rating-stars-component";

function App() {
  const [text, settext] = useState("");
  const [movies, setMovies] = useState(Data);
  const [rate, setRate] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <div className="haut">

          <Filter settext={settext} setMovies={setMovies} movies={movies} />
          
          <ReactStars
            count={5}
            onChange={(value)=>setRate(value)}
            size={34}
            activeColor="#ffd700"
          />
          
        </div>
        
        <MovieList rate={rate} text={text} movies={movies} />
        
      </header>
      

      <div className="footer">
        <h4> © Copyright 2022 © Created By Souh@ibov. All Rights Reserved </h4>
      </div>
    </div>
    
  );
}

export default App;
