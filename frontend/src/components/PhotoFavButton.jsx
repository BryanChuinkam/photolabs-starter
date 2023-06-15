import React, { useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {

  const [like, setLike] = useState('');

  const likeSetter = () => {
    like === '' ? setLike('red') : setLike('');
  };


  return (
    <div onClick={likeSetter} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon fill={like} />
      </div>
    </div>
  );
};

export default PhotoFavButton;