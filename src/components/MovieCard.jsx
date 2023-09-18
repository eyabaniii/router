import React from 'react'
import {  useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';


const MovieCard = ({movie}) => {
const navigate = useNavigate();
  return (
    <div className='carte' >
            <h5>{movie.title}</h5>
      <p>{movie.description}</p>

      <img style={{ width: '100px' }} src={movie.posterUrl} alt="" />

 
<Rating name="read-only" value={movie.rate} readOnly />

 <button onClick={()=>navigate("/movies/"+movie.id)}>Details</button>

    </div>
  )
}

export default MovieCard
