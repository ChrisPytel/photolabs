import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({photos, globalFavourites, toggleFavourite}) => {
    
  const photoItems = photos.map((photoItem, index) =>
    <li key={index}>
      <PhotoListItem 
        photoListData={photoItem}
        globalFavourites={globalFavourites}
        toggleFavourite={toggleFavourite}
        elementID={index}/>
    </li>
  );
  
  // console.log(`Our photoItems is: `, photoItems);

  return (
    <ul className="photo-list">
      {photoItems}
    </ul>
  );
};

export default PhotoList;
