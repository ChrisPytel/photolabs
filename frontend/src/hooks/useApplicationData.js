import { useReducer, useEffect } from 'react';

const INITIAL_STATE = {
  globalFavourites: [],
  selectedImage: false,
  activeModal: false,
  selectedTopic: false,
  photoData: [],
  topicData: []
};

const ACTIONS = {
  TOGGLE_FAVOURITE: 'TOGGLE_FAVOURITE',
  SELECT_IMAGE: 'SELECT_IMAGE',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_STATE',
  SET_TOPIC_DATA: 'SET_TOPIC_STATE',
  SELECT_TOPIC: 'SELECT_TOPIC'
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

    case ACTIONS.SET_PHOTO_DATA:
      return {...state, photoData: action.payload};

    case ACTIONS.SET_TOPIC_DATA:
        return {...state, topicData: action.payload};

    case ACTIONS.SELECT_TOPIC:
      return {...state, selectedTopic: action.payload};

    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
};

function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  //Helper functions, exported as hooks across our app
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

  const fetchPhotosByTopic = function(topicID) {
    dispatch({ type: ACTIONS.SELECT_TOPIC, payload: topicID });
  };

  // API endpoints, return json
  const photosURL = `http://localhost:8001/api/photos`;
  const topicsURL = `http://localhost:8001/api/topics`;

  // UseEffect for performing our Database API call for fetching photos
  useEffect(() => {
    fetch(photosURL)
    .then(res => res.json())
    .then(photosFromDB => dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: photosFromDB}))
    .catch(err => console.error(`Experienced an error attempting to fetch from ${photosURL} \nDetails:\n`, err));
  }, []);

  // UseEffect for performing our Database API call for fetching topics
  useEffect(() => {
    if (state.selectedTopic) {
      fetch(`${topicsURL}/photos/${state.selectedTopic}`)   
      .then(res => res.json())
      .then(photosByTopic => dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: photosByTopic}))
      .catch(err => console.error(`Experienced an error attempting to fetch from ${topicsURL}/photos/${state.selectedTopic} \nDetails:\n`, err));
    }
    else{
      fetch(topicsURL)
      .then(res => res.json())
      .then(topicsFromDB => dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: topicsFromDB}))
      .catch(err => console.error(`Experienced an error attempting to fetch from ${topicsURL} \nDetails:\n`, err));
    }
  }, [state.selectedTopic]);


  return {
    photos: state.photoData,
    topics: state.topicData,
    activeModal: state.activeModal,
    selectedImage: state.selectedImage,
    globalFavourites: state.globalFavourites,
    toggleFavourite,
    toggleModal,
    fetchPhotosByTopic
  };
}

export default useApplicationData;
