import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigation/>
      <div className="photo-list">        
        <PhotoList/>
      </div>
    </div>
  );
};

export default HomeRoute;
