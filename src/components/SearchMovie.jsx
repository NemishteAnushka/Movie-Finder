import React from "react";
import { Form } from "react-router-dom";
import styles from "./SearchMovie.module.css";

function SearchMovie({ searchTerm }) {
  return (
    <Form method="GET" className={`container ${styles.form}`}>
      <input type="text" name="search" id="search" defaultValue={searchTerm} />
      <button type="submit">Search</button>
    </Form>
  );
}

export default SearchMovie;
