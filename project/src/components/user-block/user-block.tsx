import { memo } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, NameSpace } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

const styles = {
  background: 'none',
  border: 'none',
};

function UserBlock () {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state[NameSpace.User].authorizationStatus);
  return (
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.Auth &&
        <li className="user-block__item">
          <div className="user-block__avatar">
            <Link to={AppRoute.MyList}>
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </Link>
          </div>
        </li>}
      <li className="user-block__item">
        {authorizationStatus === AuthorizationStatus.Auth
          ? <button style={styles} className="user-block__link" onClick={() => dispatch(logoutAction())}>Sign out</button>
          : <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>}
      </li>
    </ul>
  );
}

export default memo(UserBlock);
