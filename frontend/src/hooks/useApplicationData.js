import { useReducer } from 'react';

const INITIAL_STATE = {
  globalFavourites: [],
  selectedImage: false,
  activeModal: false
};

const ACTIONS = {
  TOGGLE_FAVOURITE: 'TOGGLE_FAVOURITE',
  SELECT_IMAGE: 'SELECT_IMAGE',
  CLOSE_MODAL: 'CLOSE_MODAL'
};

const reducer = (state, action) => {
  switch (action.type) {

    case ACTIONS.TOGGLE_FAVOURITE:
      const photoID = action.payload;

      // checks if photoID exists that was clicked exists in state
      if (state.globalFavourites.includes(photoID)) {   
         // If it exists, it filters it out of the array and removes it                    
        return {...state, globalFavourites: state.globalFavourites.filter(element => element !== photoID)};
      }
      // If it doesnt exist, spreads current favorites and adds it at the end 
      return {...state, globalFavourites: [...state.globalFavourites, photoID]};

    case ACTIONS.SELECT_IMAGE:
      return {...state, activeModal: true, selectedImage: action.payload};

    case ACTIONS.CLOSE_MODAL:
      return {...state, activeModal: false, selectedImage: null};

    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
};

function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);


  const toggleFavourite = function(photoID) {
    dispatch({type: ACTIONS.TOGGLE_FAVOURITE, payload: photoID})       
  };

  const toggleModal = function(photoDetails) {
    if (state.activeModal) {
      dispatch({type: ACTIONS.CLOSE_MODAL});
    } else {
      dispatch({type: ACTIONS.SELECT_IMAGE, payload: photoDetails});
    }   
  };

  return {
    activeModal: state.activeModal,
    selectedImage: state.selectedImage,
    globalFavourites: state.globalFavourites,
    toggleFavourite,
    toggleModal
  };
}

export default useApplicationData;



// --------------- Before useReducer refactor: Original states and helper functions ---------------

/* import React, {useState} from 'react'

function useApplicationData() {

  //States
  const [activeModal, setActiveModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(false);
  const [globalFavourites, setGlobalFavourites] = useState([]);

  const toggleFavourite = (photoID) => {
    globalFavourites.includes(photoID)?                                              // checks if photoID exists that was clicked exists in state
    setGlobalFavourites(globalFavourites.filter((element) => element !== photoID)):  // If it exists, it filters it out of the array and removes it
    setGlobalFavourites([...globalFavourites, photoID])                              // If it doesnt exist, spreads current favorites and adds it at the end 
  };
  
  //Function for toggling and passing in details for iamge to modal
  const toggleModal = function(photoDetails) { 
    setActiveModal(!activeModal); //toggles modal status
    setSelectedImage(photoDetails);       
  };

  return { activeModal, selectedImage, globalFavourites,  toggleFavourite, toggleModal};

}

export default useApplicationData; */