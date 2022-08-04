import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function E404() {
  return (
    <>
      <h1>404 Not Found</h1>
      <Link to={AppRoute.Main}>
        <span>Main page</span>
      </Link>
    </>
  );
}

export default E404;
