import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = (props) => {
  const { photos, topics, likedIds, likeSetter, openModal, fetchPhotosByTopic} = props;



  return (
    <>
      <TopNavigation topics={topics} likedIds={likedIds} fetchPhotosByTopic={fetchPhotosByTopic}/>
      <PhotoList photos={photos} likedIds={likedIds} likeSetter={likeSetter} openModal={openModal} />
    </>
  );

};

export default HomeRoute;