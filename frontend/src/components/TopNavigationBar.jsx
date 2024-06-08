import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavIcon from './FavIcon';

const TopNavigation = ({topics, globalFavourites, fetchPhotosByTopic}) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} fetchPhotosByTopic={fetchPhotosByTopic}/>
      <FavIcon displayAlert={(globalFavourites.length > 0)} selected={true}/>
    </div>
  )
}

export default TopNavigation;