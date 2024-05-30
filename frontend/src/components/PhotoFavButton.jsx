import React, { useCallback, useState, useEffect } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {  
  const [favourite, setFavourite] = useState(false);
  
  const handleFavoritePress = function() {
  //  setFavourite(favourite ? false  : true)       // Option A - Ternary statement toggle
   setFavourite(prevFavourite => !prevFavourite);   // Option B - Toggles based on previous state  
  };
  
  useEffect(() => { 
    // refactored console log out of handleFavoritePress as it might not always print 
    // the updated state because state updates in React are asynchronous
    console.log(`Status of favourite is:`, favourite);
  }, [favourite]);

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleFavoritePress}>
        {<FavIcon selected={favourite}/>}
      </div>
    </div>
  );
}

export default PhotoFavButton;