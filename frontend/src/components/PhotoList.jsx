import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({photos, globalFavourites, toggleFavourite, setActiveModal}) => {
    
  //Refactored Map away from using index and now uses photoItem.ID as its key identifier
  const photoItems = photos.map((photoItem) =>

    <li key={photoItem.id}>
      <PhotoListItem 
        photoListData={photoItem}
        globalFavourites={globalFavourites}
        toggleFavourite={toggleFavourite}
        elementID={photoItem.id}
        setActiveModal={setActiveModal}/>
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
