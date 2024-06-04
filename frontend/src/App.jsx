import React, { useEffect, useState } from 'react';

//Imported Styles
import './App.scss';

//Imported Datasets
import topics from 'mocks/topics';
import photos from 'mocks/photos';

//Imported Components
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';  //Custom react hook


const App = () => {

  //Refactored state and helpers into useApplicationData.jsx
  const { 
    activeModal, 
    selectedImage, 
    globalFavourites, 
    toggleFavourite, 
    toggleModal} = useApplicationData();
    
  useEffect(() => console.log(`UseEffect says globalFavourites is: `, globalFavourites), [globalFavourites]); 
  useEffect(() => console.log(`UseEffect says activeModal is: `, activeModal), [activeModal]); 
  useEffect(() => console.log(`UseEffect says selectedImage is: `, selectedImage), [selectedImage]); 
 
  return (
    <div className="App">
      <HomeRoute 
        topicData={topics} 
        photoData={photos} 
        globalFavourites={globalFavourites} 
        toggleFavourite={toggleFavourite}
        toggleModal={toggleModal}/>
      {activeModal ?
      <PhotoDetailsModal 
        selectedImage={selectedImage} 
        globalFavourites={globalFavourites} 
        toggleFavourite={toggleFavourite}
        toggleModal={toggleModal}/>   :   <></>}
    </div>
  );
};

export default App;
