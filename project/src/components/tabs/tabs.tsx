import { memo, useState } from 'react';
import { IFilm, IReviews } from '../../types/film';
import FilmOverview from '../film-overview/film-overview';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';

type Props = {
  film: IFilm;
  reviews: IReviews;
}

const styles = {
  background: 'none',
  border: 'none',
};

function Tabs ({ film, reviews }: Props) {
  const [activeTab, setActiveTab] = useState('Overview');

  const handleToggleTab = (name: string) => {
    setActiveTab(name);
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${activeTab === 'Overview' && 'film-nav__item--active'}`}>
            <button style={styles} className="film-nav__link" onClick={()=> handleToggleTab('Overview')}>Overview</button>
          </li>
          <li className={`film-nav__item ${activeTab === 'Details' && 'film-nav__item--active'}`}>
            <button style={styles} className="film-nav__link" onClick={()=> handleToggleTab('Details')}>Details</button>
          </li>
          <li className={`film-nav__item ${activeTab === 'Reviews' && 'film-nav__item--active'}`}>
            <button style={styles} className="film-nav__link" onClick={()=> handleToggleTab('Reviews')}>Reviews</button>
          </li>
        </ul>
      </nav>

      {activeTab === 'Overview' && <FilmOverview film={film}/>}
      {activeTab === 'Details' && <FilmDetails film={film} />}
      {activeTab === 'Reviews' && <FilmReviews reviews={reviews}/>}
    </div>
  );
}

export default memo(Tabs);
