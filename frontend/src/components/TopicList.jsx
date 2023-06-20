import React from 'react';

import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';

const TopicList = (props) => {
 
  const mappedTopics = props.topics.map((topic) => {
    return (<TopicListItem
      key={topic.id}
      id={topic.id}
      label={topic.title}
      fetchPhotosByTopic={props.fetchPhotosByTopic}
    />
    );
  });

  return (
    <div className="top-nav-bar__topic-list">
      {mappedTopics}
    </div>
  );

};

export default TopicList;