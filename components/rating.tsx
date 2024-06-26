import React from "react";
import ReactStars from "react-stars";

interface RatingProps {
  value?: number | null;
}

export default function Rating({ value }: RatingProps) {
  return (
    <div>
      {value !== null && value !== undefined ? (
        <ReactStars
          count={5}
          size={24}
          color2={"#fcba03"}
          value={value / 2}
          half={true}
          edit={false}
        />
      ) : (
        <span></span>
      )}
    </div>
  );
}
