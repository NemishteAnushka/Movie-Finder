import React from "react";
import MovieListItems from "./MovieListItems";
import styles from "./MovieList.module.css";
function MovieList({ data }) {
  const { movieApiResponse, isError, error } = data;
  if (isError) {
    return <h1>{error}</h1>;
  } //when there is error in api or network error

  if (movieApiResponse && movieApiResponse?.Response === "False") {
    return <h1>{movieApiResponse.Error || "No result found"}</h1>;
  } // this is error for if search is not found
  return (
    <div className={`container ${styles.moviesList}`}>
      {movieApiResponse.Search.map((movie) => (
        <MovieListItems {...movie} key={movie.imdbID} />
      ))}
    </div>
  );
}

export default MovieList;
