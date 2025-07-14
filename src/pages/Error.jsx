import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  return (
    <div>
      <h1>{error?.error?.message || "No result found"} </h1>
    </div>
  );
}

export default Error;
