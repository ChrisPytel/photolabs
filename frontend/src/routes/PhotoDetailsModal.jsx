import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({selectedImage, toggleModal}) => {
  console.log(`Current modal is recieving: `, selectedImage);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={()=> toggleModal()}>
        <img src={closeSymbol} alt="close symbol" />
        {/* <PhotoListItem /> */}
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
