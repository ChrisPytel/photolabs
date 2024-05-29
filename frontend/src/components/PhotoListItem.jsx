import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const listItem = props.photoListData;

  return(    
      <div className={`photo-list__item id-${listItem.id}`} key={listItem.id}>
        <PhotoFavButton/>
        <img className="photo-list__image" src={listItem.imageSource} alt={`Photo credit: ${listItem.username}`}/> 
        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={listItem.profile} alt={`${listItem.username} Profile Image`}/>         
          <div className="photo-list__user-info">
              <span>{listItem.username}</span>
              <div className="photo-list__user-location">
                <span>{listItem.location.city}, {listItem.location.country}</span>
              </div>
            </div>
        </div>
      </div>    
  );
};

export default PhotoListItem;
