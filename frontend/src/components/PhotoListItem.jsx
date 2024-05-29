import React, { useState } from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  console.log(`Our props to photoListItem are: `, props);

  const [light, setLight] = useState(`off`);

  console.log(light, setLight);


return(
  <div className={`photo-list__item id-${props.sampleData.id}`} key={props.sampleData.id}>
    <img className="photo-list__image" src={props.sampleData.imageSource}/> 
    <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={props.sampleData.profile}/>         
      <div className="photo-list__user-info">
          <span>{props.sampleData.username}</span>
          <div className="photo-list__user-location">
            <span>{props.sampleData.location.city}, {props.sampleData.location.country}</span>
          </div>
        </div>
    </div>
  </div>
);
};

export default PhotoListItem;
