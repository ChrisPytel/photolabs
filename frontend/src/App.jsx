import React from 'react';

import './App.scss';
// import PhotoListItem from './components/PhotoListItem';
// import TopicListItem from 'components/TopicListItem';
import PhotoList from './components/PhotoList';
import TopicList from 'components/TopicList';


// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };



// const photos = [...Array(3)];
// const photoItems = photos.map((photoItem, index) => 
//   <PhotoListItem key={index} photoListData={sampleDataForPhotoListItem}/>
// );


// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    <div className="App">
      <div className="photo-list">
      {/* {photoItems} */}
      {/* <PhotoList/> */}
      <TopicList/>
      </div>
    </div>
  );
};

export default App;
