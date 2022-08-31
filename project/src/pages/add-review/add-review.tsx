import { generatePath, Link, useParams } from 'react-router-dom';
import CommentAddForm from '../../components/commentAddForm/commentAddForm';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import { AppRoute } from '../../const';
import { IFilm } from '../../types/film';

type Props = {
  films: IFilm[];
}

function AddReview ({films}: Props) {
  const { id } = useParams();

  const film: IFilm | undefined = films.find(
    (item) => item.id.toString() === id
  );
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film?.backgroundImage} alt={film?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={generatePath(AppRoute.Film, { id: film?.id.toString()})} className="breadcrumbs__link">{film?.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock/>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film?.posterImage} alt={film?.name} width="218" height="327" />
        </div>
      </div>

      <CommentAddForm/>

    </section>
  );
}

export default AddReview;
