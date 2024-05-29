import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {  
  const [favourite, setFavourite] = useState(false);
  
  const handleFavoritePress = function() {
    setFavourite(favourite ? false  : true) 
    console.log(`Status of favourite is:`, favourite);    
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleFavoritePress}>
        {<FavIcon selected={favourite}/>}
      </div>
    </div>
  );
}

export default PhotoFavButton;