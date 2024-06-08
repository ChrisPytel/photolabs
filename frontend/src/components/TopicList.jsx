import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
// import topics from "mocks/topics";

// Old Dataset
/* const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
]; */

const TopicList = ({topics, fetchPhotosByTopic}) => {
  // console.log(`Our TopicList props: `, props);

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
