import React, {useState} from 'react'

function useApplicationData() {

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

  return { activeModal, selectedImage, globalFavourites,  toggleFavourite, toggleModal};

}

export default useApplicationData