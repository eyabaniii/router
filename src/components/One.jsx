import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import moviesData from "../Data";

const One = ({ movies }) => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [film, setFilm] = useState({});
  console.log(film);
  useEffect(
    (movies) => {
      const movieDetails = moviesData.find((el) => el.id == id);
      setFilm(movieDetails);
    },
    [id]
  );
  return (
    <div>
      <h1> {film.title} </h1>

      <p>{film.description}</p>

      <iframe src={film.trailer}></iframe>

      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
};

export default One;
