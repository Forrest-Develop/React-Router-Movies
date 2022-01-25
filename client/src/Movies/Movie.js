import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Movie() {
  const [movie, setMovie] = useState();

  let id = 0;
  const {MId} =useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/movies/${id}`)
      .then(resp => {
        setMovie(resp.data)
      })
      .catch(error => {
        console.error(error);
      });
  }, [MId]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}
