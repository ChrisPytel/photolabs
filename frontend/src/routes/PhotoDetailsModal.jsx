import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({selectedImage, globalFavourites, toggleFavourite, toggleModal}) => {

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={()=> toggleModal()}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images" key={selectedImage.id}>
        <PhotoFavButton
          globalFavourites={globalFavourites}
          toggleFavourite={toggleFavourite}
          elementID={selectedImage.id}/>
        <img className="photo-details-modal__image" 
          src={selectedImage.urls.full} 
          alt={`Photo credit: ${selectedImage.username}`}/> 
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" 
            src={selectedImage.user.profile} 
            alt={`${selectedImage.username} Profile Image`}/>
          <div className="photo-details-modal__photographer-info">
              <span>{selectedImage.user.name}</span>
              <div className="photo-details-modal__photographer-location">
                <span>{selectedImage.location.city}, {selectedImage.location.country}</span>
              </div>
            </div>
        </div>
      </div>  

      <header className="photo-details-modal__header">Similar Photos</header>
      
      <PhotoList 
        photos={selectedImage.similar_photos} 
        globalFavourites={globalFavourites} 
        toggleFavourite={toggleFavourite}/> 

    </div>
  )
};

export default PhotoDetailsModal;
