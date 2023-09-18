import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import MovieList from "../components/MovieList";
import moviesData from "../Data";

import Navb from "../components/Navb";
import AddMovies from "../components/AddMovies";
function Home() {
  const [movies, setmovies] = useState(moviesData);
  const [inputSearch, setinputSearch] = useState("");
  const [inputStars, setinputStars] = useState(0);
  console.log(inputStars);
  const Add = (movie) => {
    setmovies([...movies, movie]);
  };
  const [newMovie, setnewMovie] = useState({ id: Math.random() });
  
  return (
    <div className="Home">
      <Navb setinputSearch={setinputSearch} setinputStars={setinputStars} />
      <AddMovies Add={Add} />
      <MovieList
        movies={movies}
        inputSearch={inputSearch}
        inputStars={inputStars}
      />
      
    </div>
  );
}

export default Home;
