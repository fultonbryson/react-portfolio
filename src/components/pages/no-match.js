import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
      <h2>Oops! That page doesn't exist!</h2>
      <Link to='/'>Return to Home</Link>
    </div>
  );
}
