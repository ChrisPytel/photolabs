import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = (props) => {  
  return (
    <div className="home-route">
      <TopNavigation topics={props.topicData}/>
      <div className="photo-list">        
        <PhotoList photos={props.photoData}/>
      </div>
    </div>
  );
};

export default HomeRoute;
