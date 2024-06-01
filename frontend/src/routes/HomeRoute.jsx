import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = ({topicData, photoData}) => {  

  const [globalFavourites, setGlobalFavourites] = useState([]); //default contains no favorites saved

  // start with a state holding an empty array
  // create function to update state in Homeroute.jsx
  // pass function and state down as props to photoList element

  const toggleFavourite = (photoID) => {
    globalFavourites.includes(photoID)?                                              // checks if photoID exists that was clicked exists in state
    setGlobalFavourites(globalFavourites.filter((element) => element !== photoID)):  // If it exists, it filters it out of the array and removes it
    setGlobalFavourites([...globalFavourites, photoID])                              // If it doesnt exist, spreads current favorites and adds it at the end 
  };

  return (
    <div className="home-route">
      <TopNavigation 
        topics={topicData} 
        globalFavourites={globalFavourites}/>
      <div className="photo-list">        
        <PhotoList 
          photos={photoData} 
          globalFavourites={globalFavourites} 
          toggleFavourite={toggleFavourite}/>
      </div>
    </div>
  );
};

export default HomeRoute;
