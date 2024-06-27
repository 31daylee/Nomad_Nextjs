"use client";

import styles from "../styles/movie-review.module.css";
import { useEffect, useState } from "react";
import { getReviews } from "../app/(movies)/movies/[id]/action";
import Rating from "../components/rating";

interface Review {
  author: string;
  rating?: number;
  content?: string;
  updated_at?: string;
}

export default function MovieReview({ id }: { id: string }) {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    (async function () {
      const fetchedReviews = await getReviews(id);
      const reviewsWithRating = fetchedReviews.map((review: any) => ({
        author: review.author,
        rating: review.author_details.rating,
        content: review.content,
        updated_at: review.updated_at,
      }));
      setReviews(reviewsWithRating);
    })();
  }, [id]);

  return (
    <div>
      <div className={styles.container}>
        {reviews.length > 0 ? (
          reviews &&
          reviews.map((review, index) => (
            <ul key={index} className={styles.info}>
              <li>
                <Rating value={review.rating} />
              </li>
              <li>{review.content}</li>
              <li>
                {review.author} |{" "}
                {review.updated_at ? review.updated_at.slice(0, 10) : "N/A"}
              </li>
            </ul>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>
  );
}
