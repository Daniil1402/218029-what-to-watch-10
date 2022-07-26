import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { generatePath, Navigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { resetCommentData, resetIsCommentError } from '../../store/action';
import { addCommentAction } from '../../store/api-actions';
import { getError } from '../../store/error-process/selectors';
import { getIsCommentAdded, getIsCommentError, getIsCommentPending } from '../../store/film-data/selectors';
import { Comment } from '../../types/comment';
import ErrorMessage from '../error-message/error-message';

function CommentAddForm () {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const isCommentAdded = useAppSelector(getIsCommentAdded);
  const isCommentPending = useAppSelector(getIsCommentPending);
  const error = useAppSelector(getError);
  const isCommentError = useAppSelector(getIsCommentError);

  const [formData, setFormData] = useState({
    rating: 0,
    reviewText: '',
  });

  useEffect(() => () => {
    dispatch(resetCommentData());
    dispatch(resetIsCommentError());
  }, [dispatch]);

  if (isCommentAdded) {
    return <Navigate to={generatePath(AppRoute.Film, { id: id })} replace />;
  }

  const isButtonDisabled = !formData.rating || formData.reviewText.length < 50 || isCommentPending;

  const fieldChangeHandle = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const onSubmit = (comment: Comment) => {
    dispatch(addCommentAction(comment));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (id) {
      onSubmit({
        id: id,
        comment: formData.reviewText,
        rating: +formData.rating,
      });
    }
  };

  if (error) {
    return <ErrorMessage/>;
  }

  return (
    <div className="add-review">
      {isCommentError && <ErrorMessage message='Sorry'/>}
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            <input onChange={fieldChangeHandle} className="rating__input" id="star-10" type="radio" name="rating" value="10" />
            <label className="rating__label" htmlFor="star-10">Rating 10</label>

            <input onChange={fieldChangeHandle} className="rating__input" id="star-9" type="radio" name="rating" value="9" />
            <label className="rating__label" htmlFor="star-9">Rating 9</label>

            <input onChange={fieldChangeHandle} className="rating__input" id="star-8" type="radio" name="rating" value="8" />
            <label className="rating__label" htmlFor="star-8">Rating 8</label>

            <input onChange={fieldChangeHandle} className="rating__input" id="star-7" type="radio" name="rating" value="7" />
            <label className="rating__label" htmlFor="star-7">Rating 7</label>

            <input onChange={fieldChangeHandle} className="rating__input" id="star-6" type="radio" name="rating" value="6" />
            <label className="rating__label" htmlFor="star-6">Rating 6</label>

            <input onChange={fieldChangeHandle} className="rating__input" id="star-5" type="radio" name="rating" value="5" />
            <label className="rating__label" htmlFor="star-5">Rating 5</label>

            <input onChange={fieldChangeHandle} className="rating__input" id="star-4" type="radio" name="rating" value="4" />
            <label className="rating__label" htmlFor="star-4">Rating 4</label>

            <input onChange={fieldChangeHandle} className="rating__input" id="star-3" type="radio" name="rating" value="3" />
            <label className="rating__label" htmlFor="star-3">Rating 3</label>

            <input onChange={fieldChangeHandle} className="rating__input" id="star-2" type="radio" name="rating" value="2" />
            <label className="rating__label" htmlFor="star-2">Rating 2</label>

            <input onChange={fieldChangeHandle} className="rating__input" id="star-1" type="radio" name="rating" value="1" />
            <label className="rating__label" htmlFor="star-1">Rating 1</label>
          </div>
        </div>

        <div className="add-review__text">
          <textarea onChange={fieldChangeHandle} className="add-review__textarea" name="reviewText" id="review-text" placeholder="Review text" minLength={50} maxLength={400} required></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={isButtonDisabled}>Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CommentAddForm;
