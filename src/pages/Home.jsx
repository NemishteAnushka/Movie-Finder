import React from "react";
import SearchMovie from "../components/SearchMovie";
import MovieList from "../components/MovieList";
import axios from "axios";
import { api_key } from "../constants";
import { useLoaderData } from "react-router-dom";
export async function loader({ request }) {
  //code to get searchparams
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "marvel";

  try {
    const movieSearchEndPoint = `http://www.omdbapi.com/?apikey=${api_key}&s=${searchTerm}`;
    const response = await axios.get(movieSearchEndPoint);
    return {
      movieApiResponse: response.data,
      searchTerm,
      isError: false,
      error: "",
    }; //return searchTearm so that when s=null bydefault marvel should be in search query
  } catch (error) {
    const errorMessage =
      error?.response?.data?.Error || error.message || "Something Went Wrong";
    return {
      movieApiResponse: null,
      searchTerm,
      isError: true,
      error: errorMessage,
    };
  }
}
function Home() {
  const data = useLoaderData();
  return (
    <div>
      <SearchMovie searchTerm={data.searchTerm} />
      <MovieList data={data} />
    </div>
  );
}

export default Home;
