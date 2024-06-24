import React from "react";
import ReactStars from "react-stars";

export default function Rating({ voteAverage }) {
  return (
    <div>
      <ReactStars count={5} size={24} value={voteAverage} />
    </div>
  );
}
