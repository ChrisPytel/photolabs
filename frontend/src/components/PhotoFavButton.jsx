import React, { useCallback, useState, useEffect } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({globalFavourites, toggleFavourite, elementID}) {  
  
  const handleFavoritePress = function() {
   toggleFavourite(elementID);               //Toggles Global favorite  
  };
  
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleFavoritePress}>
        {<FavIcon selected={globalFavourites.includes(elementID)}/>}
      </div>
    </div>
  );
}

export default PhotoFavButton;