import { memo } from 'react';

type Props = {
  onClickHandle: () => void;
}

function ShowMore ({ onClickHandle }: Props) {
  return (
    <div className="catalog__more">
      <button onClick={() => onClickHandle()} className="catalog__button" type="button">Show more</button>
    </div>
  );
}

export default memo(ShowMore);
