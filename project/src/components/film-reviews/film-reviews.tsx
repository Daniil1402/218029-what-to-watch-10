import { memo } from 'react';
import { IReviews } from '../../types/film';

type Props = {
  reviews: IReviews;
}

function FilmReviews ({reviews}: Props) {
  const convertDate = (date: string) => {
    const millisecondsDate = Date.parse(date);
    const finalDate = new Date(millisecondsDate);
    const month = finalDate.toLocaleString('en-us', { month: 'long' });
    const day = finalDate.getDate();
    const year = finalDate.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  if (reviews.length === 0) {return <span>No reviews</span>;}

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => (
          <div className="review" key={review.id}>
            <blockquote className="review__quote">
              <p className="review__text">{review.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{review.user.name}</cite>
                <time className="review__date" dateTime={review.date}>{convertDate(review.date)}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{review.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(FilmReviews);
