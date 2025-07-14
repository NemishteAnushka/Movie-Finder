import React from "react";
import { api_key } from "../constants";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import styles from "./SinglePageDetail.module.css";

export async function loader({ params }) {
  const imdbID = params?.imdbID;
  const singlePageEndPoint = `http://www.omdbapi.com/?apikey=${api_key}&i=${imdbID}&plot=full`;
  try {
    const response = await axios.get(singlePageEndPoint);
    return {
      movie: response.data,
      isError: false,
      error: "",
    };
  } catch (error) {
    const errorMessage =
      error?.response?.data?.Error || error.message || "Something went wrong";
    console.log(error);
    return {
      movie: null,
      isError: true,
      error: errorMessage,
    };
  }
}
function SinglePageDetail() {
  const { movie, isError, error } = useLoaderData();
  if (isError) {
    return <h1>{error}</h1>; //for apikey or network error
  }

  if (movie && movie.Response === "False") {
    return <h1>{movie.Error || "Something went wrong"}</h1>;
  }
  return (
    <div className={`container ${styles.movieDetail}`}>
      <div className={styles.infoOnLeft}>
        <h2>{movie.Title}</h2>
        <img src={movie.Poster} alt={movie.Title} />

        <p className={styles.infoPara}>
          <span className={styles.key}>Release Date </span>
          <span className={styles.value}>{movie.Released}</span>
        </p>
        <p className={styles.infoPara}>
          <span className={styles.key}> Genre </span>
          <span className={styles.value}> {movie.Genre}</span>
        </p>
        <p className={styles.infoPara}>
          <span className={styles.key}>Runtime </span>
          <span className={styles.value}> {movie.Runtime}</span>
        </p>
        <p className={styles.infoPara}>
          <span className={styles.key}>Language </span>
          <span className={styles.value}>{movie.Language}</span>
        </p>

        <p className={styles.infoPara}>
          <span className={styles.key}>Awards </span>
          <span className={styles.value}> {movie.Awards}</span>
        </p>
      </div>
      <div className={styles.infoOnright}>
        <div className="plot">
          <div className={styles.bigInfo}>
            <h3>Plot</h3>
            <p>{movie.Plot}</p>
          </div>
          <div className={styles.bigInfo}>
            <h3>Actors</h3>
            <p>{movie.Actors}</p>
          </div>
          <div className={styles.bigInfo}>
            <h3>Country</h3>
            <p>{movie.Country}</p>
          </div>
          <h2>More Info</h2>
          <p className={styles.infoPara}>
            <span className={styles.key}>Director </span>
            <span className={styles.value}>{movie.Director}</span>
          </p>
          <p className={styles.infoPara}>
            <span className={styles.key}>imdb Rating </span>
            <span className={styles.value}>{movie.imdbRating}</span>
          </p>
          <p className={styles.infoPara}>
            <span className={styles.key}>imdb Votes </span>
            <span className={styles.value}>{movie.imdbVotes}</span>
          </p>
          <p className={styles.infoPara}>
            <span className={styles.key}>Boxoffice </span>
            <span className={styles.value}>{movie.BoxOffice}</span>
          </p>
          <p className={styles.infoPara}>
            <span className={styles.key}>Metascore</span>
            <span className={styles.value}>{movie.Metascore}</span>
          </p>
          <p className={styles.infoPara}>
            <span className={styles.key}>Rated</span>
            <span className={styles.value}>{movie.Rated}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SinglePageDetail;
