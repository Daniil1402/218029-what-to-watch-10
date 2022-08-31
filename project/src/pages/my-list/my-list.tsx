import { IFilm } from '../../types/film';
import FilmList from '../../components/film-list/film-list';
import UserBlock from '../../components/user-block/user-block';
import Logo from '../../components/logo/logo';

type Props = {
  films: IFilm[];
}

function MyList ({films}:Props) {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <UserBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmList films={films}/>
        </div>
      </section>

      <footer className="page-footer">
        <Logo className='logo__link--light'/>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyList;
