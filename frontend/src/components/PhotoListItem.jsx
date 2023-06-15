
import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {

  return (
    <div key={props.id} className='photo-list__item'>
      <PhotoFavButton />
      <img src={props.imageSource} className='photo-list__image'></img>
      <hr></hr>
      <div className='list__user'>
        <img src={props.profile} className='photo-list__user-profile'></img>
        <span className='photo-list__user-info'>{props.username}</span>
        <div className='.photo-list__user-location'>
          <span>{props.location.city}, </span>
          <span>{props.location.country}</span>
        </div>
      </div>
    </div>
  );

};

PhotoListItem.defaultProps = {
  "id": "1",
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  "username": "Joe Example",
  "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
};

export default PhotoListItem;