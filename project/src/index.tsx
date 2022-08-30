import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
// import ErrorMessage from './components/error-message/error-message';
import { store } from './store';
import { fetchFilmsAction, fetchPromoFilmAction } from './store/api-actions';
import {checkAuthAction} from './store/api-actions';

store.dispatch(checkAuthAction());
store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoFilmAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      {/* <ErrorMessage /> */}
      <App/>
    </Provider>
  </React.StrictMode>
);
