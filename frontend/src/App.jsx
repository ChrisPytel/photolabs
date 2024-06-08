import React from 'react';

//Imported Styles
import './App.scss';

//Imported Components
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';  //Custom react hook


const App = () => {

  //Refactored state and helpers into useApplicationData.jsx
  const { 
    photos,                     //photos are now being fetched from database
    topics,                     //topics are now being fetched from database
    activeModal, 
    selectedImage, 
    globalFavourites, 
    toggleFavourite, 
    toggleModal,
    fetchPhotosByTopic
  } = useApplicationData();
    
  return (
    <div className="App">
      <HomeRoute 
        topicData={topics} 
        photoData={photos} 
        globalFavourites={globalFavourites} 
        toggleFavourite={toggleFavourite}
        toggleModal={toggleModal}
        fetchPhotosByTopic={fetchPhotosByTopic}/>
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
