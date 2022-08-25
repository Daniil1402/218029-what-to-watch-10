import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store';
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
    <Provider store = {store}>
      <App promoFilm={settings} films={films}/>
    </Provider>
  </React.StrictMode>
);
