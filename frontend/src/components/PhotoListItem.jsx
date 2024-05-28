import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  console.log(`Our props to photoListItem are: `, props);

  return(
  <div className={`imgContainer id-${props.sampleData.id}`}>
      <img src={props.sampleData.imageSource}></img>
      <div className="userInfo">
      <img src={props.sampleData.profile}></img>
      <h3>{props.sampleData.username}</h3>
      <p>{props.sampleData.location.city}, {props.sampleData.location.country}</p>
      </div>
    </div>
  );
};

export default PhotoListItem;
