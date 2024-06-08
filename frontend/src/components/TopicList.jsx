import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({topics, fetchPhotosByTopic}) => {

  //Maps over the topics passed from database, then renders the resulting array
  const listItems = topics.map((topic) =>
    <TopicListItem topic={topic} fetchPhotosByTopic={fetchPhotosByTopic} key={topic.id}/>
);

  return (
    <div className="top-nav-bar__topic-list">
      {listItems}
    </div>
  );
};

export default TopicList;
