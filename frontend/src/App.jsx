import React from 'react';
// import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';
import TopNavigation from './components/TopNavigationBar';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  return (

    <div className="App">
      <TopNavigation />
    </div>
  );
};

export default App;
