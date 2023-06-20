import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';


const PhotoList = (props) => {
  const { photos, likedIds, likeSetter , openModal} = props;


  const mappedPhotos = photos.map((photo) => {
    return (<PhotoListItem key={photo.id} photo={photo} likedIds={likedIds} likeSetter={likeSetter} openModal={openModal} />);
  });

  return (
    <ul className="photo-list">
      {mappedPhotos}
    </ul>
  );
};

export default PhotoList;