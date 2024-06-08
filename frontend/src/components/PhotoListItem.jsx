import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({photoListData, globalFavourites, toggleFavourite, elementID, toggleModal}) => {

  //When our photos are clicked, passes our object for this particular image to our modal component to render
  const handlePhotoClick = function() {
    toggleModal(photoListData);
  };

    return(
      <div className="photo-list__item" key={photoListData.id}>
        <PhotoFavButton
          globalFavourites={globalFavourites}
          toggleFavourite={toggleFavourite}
          elementID={elementID}/>
        <img className="photo-list__image" 
          src={photoListData.urls.full} 
          alt={`Photo credit: ${photoListData.username}`}
          onClick={handlePhotoClick}/> 
        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={photoListData.user.profile} alt={`${photoListData.username} Profile Image`}/>         
          <div className="photo-list__user-info">
              <span>{photoListData.user.name}</span>
              <div className="photo-list__user-location">
                <span>{photoListData.location.city}, {photoListData.location.country}</span>
              </div>
            </div>
        </div>
      </div>
  );
};

export default PhotoListItem;
