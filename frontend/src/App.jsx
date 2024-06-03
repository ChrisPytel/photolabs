import React, { useEffect, useState } from 'react';

//Imported Styles
import './App.scss';

//Imported Datasets
import topics from 'mocks/topics';
import photos from 'mocks/photos';

//Imported Components
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {

  //States
  const [activeModal, setActiveModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(false);
  const [globalFavourites, setGlobalFavourites] = useState([]);
  
  const toggleFavourite = (photoID) => {
    globalFavourites.includes(photoID)?                                              // checks if photoID exists that was clicked exists in state
    setGlobalFavourites(globalFavourites.filter((element) => element !== photoID)):  // If it exists, it filters it out of the array and removes it
    setGlobalFavourites([...globalFavourites, photoID])                              // If it doesnt exist, spreads current favorites and adds it at the end 
  };

  //Function for toggling and passing in details for iamge to modal
  const toggleModal = function(photoDetails) { 
    setActiveModal(!activeModal); //toggles modal status
    setSelectedImage(photoDetails);       
  };
    
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
