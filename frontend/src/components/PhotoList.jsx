import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({photos, globalFavourites, toggleFavourite, toggleModal}) => {

  //If selectedPhoto is passed in from modal, updates its data structure
  if (typeof(photos) === `object`) {
    photos = Object.values(photos);
  } 
    
  //Refactored Map away from using index and now uses photoItem.ID as its key identifier
  const photoItems = photos.map((photoItem) =>

    <li key={photoItem.id}>
      <PhotoListItem 
        photoListData={photoItem}
        globalFavourites={globalFavourites}
        toggleFavourite={toggleFavourite}
        elementID={photoItem.id}
        toggleModal={toggleModal}/>
    </li>
  );
  
  return (
    <ul className="photo-list">
      {photoItems}
    </ul>
  );
};

export default PhotoList;
