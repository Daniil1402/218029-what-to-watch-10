import { NameSpace } from '../../const';
import {useAppSelector} from '../../hooks';
import './error-message.css';

type Props = {
  message?: string;
}

function ErrorMessage({message}: Props): JSX.Element | null {
  const error = useAppSelector((state) => state[NameSpace.Error].error);

  if (message) {
    return <div className='error-message'>{message}</div>;
  }

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;
}

export default ErrorMessage;
