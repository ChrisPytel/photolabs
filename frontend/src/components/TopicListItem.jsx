import React from "react";

import "../styles/TopicListItem.scss";

// Old Dataset
// const sampleDataForTopicListItem = {
//   id: "1",
//   slug: "topic-1",
//   label: "Nature",
// };

const TopicListItem = ({topic, fetchPhotosByTopic}) => {
  // console.log(`Our props in TopicListItem: `, props);

  const handleTopicClick = function(topicToFetch) {    
    console.log(`Our topicToFetch is: `, topicToFetch);
    fetchPhotosByTopic(topicToFetch);
  };

  return (
    <div className="topic-list__item">
        <span onClick={()=>handleTopicClick(topic.id)}>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
