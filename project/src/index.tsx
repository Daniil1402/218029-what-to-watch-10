import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { films } from './mocks/films';

const settings = {
  id: '1',
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  date: 2014,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App promoFilm={settings} films={films}/>
  </React.StrictMode>
);
