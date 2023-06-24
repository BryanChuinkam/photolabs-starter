
import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const { photo, likedIds, likeSetter, openModal } = props;


  return (
    <div className='photo-list__item'>
      <PhotoFavButton likedIds={likedIds} likeSetter={likeSetter} id={photo.id} />
      <img src={photo.urls.regular} className='photo-list__image' onClick={() => {
        openModal(photo);
      }}></img>
      <hr></hr>
      <div className='list__user' >
        <img src={photo.user.profile} className='photo-list__user-profile'></img>
        <span className='photo-list__user-info'>{photo.user.name}</span>
        <div className='.photo-list__user-location'>
          <span>{photo.location.city} </span>
          <span>{photo.location.country}</span>
        </div>
      </div>
    </div>
  );

};


export default PhotoListItem;