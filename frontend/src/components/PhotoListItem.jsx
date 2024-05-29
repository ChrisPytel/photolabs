import React, { useState } from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  console.log(`Our props to photoListItem are: `, props);

  const listItem = props.photoListData;

  return(
    <div className={`photo-list__item id-${listItem.id}`} key={listItem.id}>
      <img className="photo-list__image" src={listItem.imageSource}/> 
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={listItem.profile}/>         
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
