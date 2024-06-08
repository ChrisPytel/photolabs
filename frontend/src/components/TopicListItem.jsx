import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({topic, fetchPhotosByTopic}) => {

  //Clicking the topic passes the ID to perform a database fetch for all photos matching the topic category
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
