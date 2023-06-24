import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import PhotoListItem from '../components/PhotoListItem';
import PhotoFavButton from '../components/PhotoFavButton';


const PhotoDetailsModal = (props) => {
  const { closeModal, modalData, likedIds, likeSetter, openModal } = props;


  const mappedSimilarPhotos = modalData.similar_photos.map((photo) => {
    return (<PhotoListItem key={photo.id} photo={photo} likedIds={likedIds} likeSetter={likeSetter} openModal={openModal} />);
  });

  return (
    <div className='photo-details-modal'>
      <button className='photo-details-modal--close-button' onClick={closeModal}>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>

      <div className='photo-details-modal__images '>
        <PhotoFavButton likedIds={likedIds} likeSetter={likeSetter} id={modalData.id} />
        <img src={modalData.urls.full} className='photo-details-modal__image' />
        <div className='photo-details-modal__top-bar'>
          <div className='photo-details-modal__photographer-details'>
            <img src={modalData.user.profile} className='photo-list__user-profile'></img>
            <span className='photo-list__user-info'>{modalData.user.name}</span>
          </div>
        </div>
        <h3 className='.photo-details-modal__header'> Similar Photos</h3>
        <ul className="photo-list">
          {mappedSimilarPhotos}
        </ul>
      </div>


    </div>

  );

};

export default PhotoDetailsModal;