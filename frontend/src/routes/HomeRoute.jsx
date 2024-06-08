import React, { useEffect, useState } from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = ({topicData, photoData, toggleModal, globalFavourites, toggleFavourite, fetchPhotosByTopic}) => {

  //Renders the Nav container and the Photos container on our homepage. Default state for our SPA when launched
  return (
    <div className="home-route">
      <TopNavigation 
        topics={topicData} 
        globalFavourites={globalFavourites}
        fetchPhotosByTopic={fetchPhotosByTopic}/>
      <div className="photo-list">
        <PhotoList 
          photos={photoData} 
          globalFavourites={globalFavourites} 
          toggleFavourite={toggleFavourite}
          toggleModal={toggleModal}/>
      </div>
    </div>
  );
};

export default HomeRoute;
