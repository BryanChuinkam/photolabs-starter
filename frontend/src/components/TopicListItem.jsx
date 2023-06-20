import React from 'react';

import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  const { label, id, fetchPhotosByTopic } = props;


  return (
    <div className="topic-list__item" onClick={() => fetchPhotosByTopic(id)}>
      <span>
        {label}
      </span>
    </div>
  );
};

export default TopicListItem;