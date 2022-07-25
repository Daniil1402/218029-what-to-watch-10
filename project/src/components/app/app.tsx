import Main from '../../pages/main/main';

type PromoFilm = {
  title: string;
  genre: string;
  date: number;
};

function App({title, genre, date}: PromoFilm) {

  return <Main title={title} genre={genre} date={date} />;
}

export default App;
