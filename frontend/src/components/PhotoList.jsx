import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  console.log(`Our props in Photolist: `, props);
  
  const photoItems = props.photos.map((photoItem, index) =>
    <li key={index}>
    <PhotoListItem photoListData={photoItem}/>
    </li>
  );
  
  console.log(`Our photoItems is: `, photoItems);


  return (
    <ul className="photo-list">
      {photoItems}
    </ul>
  );
};

export default PhotoList;
