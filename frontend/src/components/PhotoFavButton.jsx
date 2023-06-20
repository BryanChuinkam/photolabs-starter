import React from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  const { likedIds, likeSetter, id } = props;

  return (
    <div onClick={() => {
      likeSetter(id);
    }} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon fill={likedIds.includes(id) ? 'red' : ''} />
      </div>
    </div>
  );
};

export default PhotoFavButton;