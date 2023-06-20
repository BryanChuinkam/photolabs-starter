import React, { useState, useEffect } from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from "./hooks/useApplicationData";

import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => {
        setPhotos([...data]);
      });
  }, []);

  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => {
        setTopics([...data]);
      });
  }, []);

  const fetchPhotosByTopic = (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
      .then(res => res.json())
      .then(data => {
        setPhotos([...data]);
      });

  };


  const {
    state,
    likeSetter,
    openModal,
    closeModal,
  } = useApplicationData();

  const { likedIds, isModalOpen, modalData } = state;

  return (

    <div className="App">
      <HomeRoute photos={photos} topics={topics} likedIds={likedIds} likeSetter={likeSetter} openModal={openModal} fetchPhotosByTopic={fetchPhotosByTopic} />
      {isModalOpen && <PhotoDetailsModal closeModal={closeModal} modalData={modalData} likedIds={likedIds} likeSetter={likeSetter} openModal={openModal} />}
    </div>
  );
};

export default App;
