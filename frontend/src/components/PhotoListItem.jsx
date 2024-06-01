import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({photoListData, globalFavourites, toggleFavourite, elementID, setActiveModal}) => {
  // console.log(`Our photoListData: `, photoListData);

    return(    
      <div className={`photo-list__item id-${photoListData.id}`} key={photoListData.id}>
        <PhotoFavButton
          globalFavourites={globalFavourites}
          toggleFavourite={toggleFavourite}
          elementID={elementID}/>
        <img className="photo-list__image" 
          src={photoListData.urls.full} 
          alt={`Photo credit: ${photoListData.username}`}
          onClick={() => setActiveModal(elementID)}/> 
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
